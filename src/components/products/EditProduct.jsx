import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL + "/products/" + id;
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BASE_URL + "/products/" + id;
    axios
      .put(url, product)
      .then((response) => {
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
        setMessage("Product has been updated successfully!!!!");
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditProduct;
