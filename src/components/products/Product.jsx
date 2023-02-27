import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Product = ({
  product: { _id, title, description, price, thumbnail },
  setProducts,
  products,
  setMessage,
}) => {
  const handleDelete = async (id) => {
    try {
      const url = process.env.REACT_APP_BASE_URL + "/products/" + id;
      const response = await axios.delete(url);
      setProducts(products.filter((product) => product._id !== id));
       setMessage(response.data.message);
      setTimeout(() => {
         setMessage("");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>
        <strong>ID</strong> {_id}
      </p>
      <p>
        <strong>Title</strong> {title}
      </p>
      <p>
        <strong>Description</strong> {description}
      </p>
      <p>
        <strong>Price</strong> {price}
      </p>
      <img src={thumbnail} alt="" width="30px" /> <br />
      <button><NavLink to={`/products/${_id}`}>Show details</NavLink></button>
      <button><NavLink to={`/products/${_id}/edit`}>Edit Product</NavLink></button>
      <button onClick={() => handleDelete(_id)}>Delete</button>
      <hr />
    </div>
  );
};

export default Product;
