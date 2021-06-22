import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { useAuth } from "../../contexts/AuthContext";
import '../css/Products.css'


export default function MyListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const db = firebase.firestore();
  const { currentUser } = useAuth();

  const currentUserID = currentUser.uid;
  const currentUserName = currentUser.displayName;
  const ref = db.collection(currentUserID); // change this to whatever collection

  function getProducts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
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
      <h2>{currentUserName}</h2> {/*<--- change to username}*/}
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

