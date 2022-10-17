import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Swal from "sweetalert2";
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

  const handlerClick = (event: MouseEvent<HTMLButtonElement>) => {
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

  return <div>FormProducts</div>;
};

export default FormProducts;
