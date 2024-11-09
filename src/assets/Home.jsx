import React, { useState, useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Prices } from "./Prices";
import { useCart } from "../context/cart";
import Hero from "./Hero"
import Collections from "./Collections"
import NewArrivals from "./NewArrivals"
import DealWeek from "./DealWeek"
import Instagram from "./Instagram"
import LatestNews from "./LatestNews"

function Home() {
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [state, dispatch] = useReducer(reducer, products);

  function reducer(state, action) {
    switch (action.type) {
      case "cartfilter":
        return console.log(state);
      default:
        return state;
    }
  }

  function getAllCategory() {
    fetch("http://localhost:4300/api/category/getcategory")
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setCategories(res2.category);
      })
      .catch((error) => console.log(error));
  }

  function getProducts() {
    fetch("http://localhost:4300/api/product/getproducts")
      .then((resp1) => resp1.json())
      .then((resp2) => {
        console.log(resp2);
        setProducts(resp2.product);
      })
      .catch((error) => console.log(error));
  }

  function handleFilter(value, id) {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  }

  function filterProduct() {
    const data = { checked, radio };
    fetch("http://localhost:4300/api/product/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setProducts(res2.products);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    } else {
      getProducts(); // Reset products if no filters are applied
    }
  }, [checked, radio]);

  return (
    <div>
    <Hero/>
    <Collections/>
    <NewArrivals/>
    <DealWeek/>
    <Instagram/>
    <LatestNews/>
      
    </div>
  );
}

export default Home;
