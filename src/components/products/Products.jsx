import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [ message,  setMessage] = useState("");

  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL + "/products";
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      { message ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">{ message}</Alert>
        </Stack>
      ) : null}
      <h1>Show all products {products.length}</h1>
      <ul>
        {products.length > 0 &&
          products.map((product) => (
            <Product
              product={product}
              key={product._id}
              setProducts={setProducts}
              products={products}
              setMessage={ setMessage}
            />
          ))}
      </ul>
    </div>
  );
};

export default Products;
