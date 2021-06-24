import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Col, Card, Row } from 'antd';
import CheckBox from '../components/Listings/Sections/CheckBox';
import RadioBox from '../components/Listings/Sections/RadioBox';
import { categories, price } from '../components/Listings/Sections/Datas';
import Header from '../components/Header'
import Product from '../components/Products'
import {  Box } from "@material-ui/core";
import { slide as Menu } from 'react-burger-menu';
import './css/Listing.css';
import { ProSidebar,  MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {AiOutlinePlus} from "react-icons/ai";
import { Link } from "react-router-dom";

const { Meta } = Card;

function Listings() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
 
    const [Filters, setFilters] = useState({
        categories: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    })

    const getProducts = (variables) => {
        Axios.post('/components/Product', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fetch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > </a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    return (
        <div style={{ width: '100%', margin: '2rem auto' }}>
            <div classname="filter" style={{ textAlign: 'center' }}>
                < Header />
                <h2>  Browse  </h2>
            </div>
        <div classname="h1">
        <ProSidebar>
        <Menu iconShape="square">
        <MenuItem > Search </MenuItem>
        <SubMenu title="Filter" >    
            <MenuItem> 
                <Link to = './ProfilePage' style = {{color:'black'}}><AiOutlinePlus/> New Listing</Link>   
            </MenuItem>

            
                
            <MenuItem> 
                <Box container justify="center">
                {/* Filter  */}
                <div  style={{ display: 'flex', height: '145px',}}>
                <Row gutter={[20, 20]}>
                <Col lg={12} xs={24}>
                    <RadioBox
                        list={price}
                        handleFilters={filters => handleFilters(filters, "Price")}
                    />
                </Col>
                </Row>
            </div>
            </Box>
            </MenuItem>

            

            </SubMenu>
            </Menu>
            </ProSidebar>
            </div>
 



            <div style={{ width: '75%', margin: '2rem auto'}}>
                <Product/>
            </div>



            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No more listings..</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>
                </div>
            }


            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }


        </div>
    )
}

export default Listings