import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { ProductsProps } from "../interface/ProductsProps";

interface Props {
  productsList: ProductsProps["productsList"];
  setProductsList: Dispatch<SetStateAction<ProductsProps["productsList"]>>;
}

const FormProducts: FC<Props> = ({ productsList, setProductsList }) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState<ProductsProps | any>(0);

  const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const setDetailinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail(event.target.value);
  };
  const setImageinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!name && !detail && !image) {
      Swal.fire({
        text: "Please enter data",
        icon: "error",
      });
    }
    const productsData = { name, detail, image };
    setProductsList([...productsList, productsData]);
    setName("");
    setDetail("");
    setImage(0);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={setNameinputHandler}
          />
        </div>
        <div className="form-div">
          <label htmlFor="detail">Detail</label>
          <input
            type="text"
            name="detail"
            value={detail}
            onChange={setDetailinputHandler}
          />
        </div>
        <div className="form-div">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="Image"
            value={image}
            onChange={setImageinputHandler}
          />
        </div>
        <Button onClick={handleClick}>บันทึก</Button>
      </div>
    </div>
  );
};

export default FormProducts;
