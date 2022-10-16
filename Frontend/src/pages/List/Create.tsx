import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigation } from "react-router-dom";

function Create() {
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            <div className="form-wrapper">
              {Object.keys(validationError).length > 0 && (
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-danger">
                      <ul className="mb-0">
                        {Object.entries(validationError).map(([key, value]) => (
                          <li key={key}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <Form onSubmit={createProduct}>
                <Row>
                  <Col>
                    <Form.Group controlId="Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="Detail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        value={detail}
                        onChange={(event) => {
                          setDetail(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="Iamge">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="file" onChange={changeHandler} />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  className="mt-2"
                  size="lg"
                  type="submit"
                >
                  บันทึก
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
