import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import RadioBox from "../components/Listings/Sections/RadioBox";
import { price } from "../components/Listings/Sections/Datas";
import Header from "../components/Home/Header";
import Product from "../components/Products";
import { Box } from "@material-ui/core";
import { slide as Menu } from "react-burger-menu";
import "./css/Listing.css";
import { ProSidebar, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";

const { Meta } = Card;

export default function Wishlist() {
  const location = useLocation();
  const { category } = location.state;

  return (
    <div style={{ width: "100%", margin: "2rem auto" }}>
      <div classname="filter" style={{ textAlign: "center" }}>
        <Header />
        <h2> Wishlist </h2>
      </div>
      <div classname="h1">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>
              <Link to="./new-wishlist" style={{ color: "black" }}>
                <AiOutlinePlus /> Add new wishlist
              </Link>
            </MenuItem>
            <Link
              to={{
                pathname: "./listings",
                state: {
                  category: category,
                  type: "listing",
                },
              }}
              style={{ color: "black" }}
            >
              <GrView /> View Listing{" "}
            </Link>

            <SubMenu title="Filter">
              <MenuItem> Search </MenuItem>

              <MenuItem>
                <Box container justify="center"></Box>
              </MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>

      <div style={{ width: "75%", margin: "2rem auto" }}>
        <Products />
      </div>
    </div>
  );
}
