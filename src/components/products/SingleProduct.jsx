import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { _id, title, description, price, thumbnail } = product;
  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      const url = process.env.REACT_APP_BASE_URL + "/products/" + id;
      const response = await axios.delete(url);
      setProduct({});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {Object.keys(product).length !== 0 ? (
        <>
          <h1>Display details of single product</h1>
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
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </>
      ) : (
        <h1>Product Not found</h1>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default SingleProduct;
