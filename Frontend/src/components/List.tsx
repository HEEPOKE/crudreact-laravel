import React, { FC } from "react";
import { ProductsProps } from "../interface/ProductsProps";

const List: FC<ProductsProps> = ({ productsList }) => (
  <div className="products-List">
    {productsList.map((products, index) => (
      <div key={index} className="products-item">
        <img src={products.image} alt="image" />
        <input placeholder="{products.name}" />
        <input placeholder="{products.detail}" />
      </div>
    ))}
  </div>
);

export default List;
