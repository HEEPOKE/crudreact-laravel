import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table } from "react-bootstrap";

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get(`http://localhost:8000/api/products`).then(({ data }) => {
      setProducts(data);
    });
  };

  return (
    <div className="container">
      <div className="container mt-3">
        <h2>รายชื่อสินค้า</h2>
      </div>
      <div className="row createButton">
        <LinkContainer to="/Create">
          <Button variant="primary" className="col-2 mt-3 text-center">
            Create
          </Button>
        </LinkContainer>
      </div>
      <div className="container justify-content-center">
        <div className="card card-body mt-3">
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="text-center"
          >
            <thead>
              <tr>
                <td>Image</td>
                <td>Name</td>
                <td>Detail</td>
                <td>Manage</td>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((row, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={`http:://localhost:8000/storage/product/image/${row.image}`}
                        alt="image"
                        width="50px"
                      ></img>
                    </td>
                    <td>{row.detail}</td>
                    <td>{row.name}</td>
                    <td>
                      <LinkContainer to={`/product/edit/${row.id}`}>
                        <Button variant="warning">Edit</Button>
                      </LinkContainer>
                    </td>
                    <Button
                      variant="danger"
                      onClick={() => deleteProduct(row.id)}
                    >
                      Delete
                    </Button>
                  </tr>
                ))
              ) : (
                <>
                  <tr>
                    <td colSpan={4}>ไม่มีข้อมูล</td>
                  </tr>
                </>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
