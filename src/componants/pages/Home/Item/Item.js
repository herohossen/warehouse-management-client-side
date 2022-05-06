import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({item}) => {
  const { _id, name, img, description, price, supplier } = item;
  const navigate = useNavigate();

  const navigateToItemDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="item">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>supplier: {supplier}</p>
      <p>
        <small>{description}</small>
      </p>

      <button
        onClick={() => navigateToItemDetail(_id)}
        className="btn btn-primary"
      >
        Manage
      </button>
    </div>
  );
};

export default Item;
