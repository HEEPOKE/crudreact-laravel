import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigation } from "react-router-dom";
import { ProductsProps } from "../../interface/ProductsProps";
import FormProducts from "../../components/FormProducts";
import List from "../../components/List";

function Create() {
  const [productsList, setProductsList] = useState<
    ProductsProps["productsList"]
  >([]);

  const navigate = useNavigation();

  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState();
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("detail", detail);
    formData.append("image", image);

    await axios
      .post(`http//localhost/api/products`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/products/show");
      })
      .catch(({ response }) => {
        if (response.status === 442) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
<FormProducts productsList={productsList} setProductsList={setProductsList} />
<List productsList={productsList} setProductsList={setProductsList} />
  );
}

export default Create;
