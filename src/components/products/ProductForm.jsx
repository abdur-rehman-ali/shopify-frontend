import React, { useState } from "react";
import axios from "axios";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BASE_URL + "/products";
    axios
      .post(url, product)
      .then((response) => {
        console.log(response);
        setProduct({
          title: "",
          description: "",
          price: 0,
          discountPercentage: 0,
          rating: 0,
          stock: 0,
          brand: "",
          category: "",
          thumbnail: "",
          images: [],
        });
        setMessage("Your form has been submitted!!!!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {message ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">{message}</Alert>
        </Stack>
      ) : null}
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            label="Title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            id="description"
            label="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="price">Price</InputLabel> <br />
          <Input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="discountPercentage">
            Discount Percentage
          </InputLabel>
          <br />
          <Input
            type="number"
            id="discountPercentage"
            name="discountPercentage"
            value={product.discountPercentage}
            onChange={handleChange}
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="rating">Rating</InputLabel> <br />
          <Input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            min={1}
            max={5}
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="stock">Stock</InputLabel> <br />
          <Input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="brand">Brand</InputLabel> <br />
          <Input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </FormControl>
        <br /> <br /> <br />
        <FormControl sx={{ width: 1 }}>
          <InputLabel htmlFor="category">Category</InputLabel> <br />
          <Input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </FormControl>
        <br /> <br /> <br />
        {/* <label htmlFor="thumbnail">Thumbnail</label> <br />
      <input
        type="text"
        id="thumbnail"
        name="thumbnail"
        value={product.thumbnail}
        onChange={handleChange}
      />
      <br /> */}
        {/* <label htmlFor="images">Images</label> <br />
      <input
        type="text"
        id="images"
        name="images"
        value={product.images.join(', ')}
        onChange={(e) =>
          setProduct((prevState) => ({
            ...prevState,
            images: e.target.value.split(',').map((image) => image.trim()),
          }))
        }
      />
      <br /> */}
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ProductForm;
