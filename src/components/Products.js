import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Grid } from '@material-ui/core'
import Product from './Product'
import { useLocation } from "react-router-dom";


function Products(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const db = firebase.firestore();
  const location = useLocation();
  const { category } = location.state;

  const ref = db.collection(category); // change this to prop 

  function getProducts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(doc.data());
      });
      setProducts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>{category}</h1>
      <Grid container justify='center' spacing = {4}>
        {products.map((product) => (
            <Grid item key = {product.id} xs = {12} sm = {6} md ={4} lg = {3}>
                <Product product = {product} />
                </ Grid>
        ))}
        </Grid> 
    </div>
  );
}

export default Products;
