import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import RadioBox from "../components/Listings/Sections/RadioBox";
import { price } from "../components/Listings/Sections/Datas";
import Listingheader from "../components/Home/Listingheader";
import Product from "../components/Products";
import { Box } from "@material-ui/core";
import { slide as Menu } from "react-burger-menu";
import "./css/Listing.css";
import { ProSidebar, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { useLocation } from "react-router-dom";

const { Meta } = Card;

export default function Listings() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [loading, setLoading] = useState([]);
  const location = useLocation();
  const { category } = location.state;

  const [Filters, setFilters] = useState({
    price: [],
  });

  function getProducts() {}

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts();
  });

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={<a href={`/product/${product._id}`}> </a>}
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    console.log("array", array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }
  };

  return (
    <div style={{ width: "100%", margin: "2rem auto" }}>
      <div classname="filter" style={{ textAlign: "center" }}>
        <Listingheader />
        <h2> Browse </h2>
      </div>
      <div classname="h1">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>
              <Link to="./new-listing" style={{ color: "black" }}>
                <AiOutlinePlus /> New Listing
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={{
              pathname: "./wishlist",
               state: {
                category: category,
                type: "wishlist",
              }, 
            }} style={{ color: "black" }}>
                <GrView /> View Wishlist{" "}
              </Link>
            </MenuItem>

            <SubMenu title="Filter">
              <MenuItem>
                {" "}
                <AiOutlineSearch /> Search
              </MenuItem>

              <MenuItem>
                <Box container justify="center">
                  {/* Filter  */}
                  <div style={{ display: "flex", height: "145px" }}>
                    <Row gutter={[20, 20]}>
                      <Col lg={12} xs={24}>
                        <RadioBox
                          list={price}
                          handleFilters={(filters) =>
                            handleFilters(filters, "Price")
                          }
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

      <div style={{ width: "75%", margin: "2rem auto" }}>
        <Product />
      </div>

      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "400px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No more listings..</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}
