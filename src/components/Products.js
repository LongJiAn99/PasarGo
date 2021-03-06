import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import "./css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const db = firebase.firestore();
  const location = useLocation();
  const { category, type } = location.state;

  const ref = db.collection(category); 

  function getProducts() {
    setLoading(true);
    ref
      .where("type", "==", type)
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
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
      <h2>{category}</h2>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={12}
            md={6}
            lg={3}
            style={{ display: "flex" }}
          >
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
