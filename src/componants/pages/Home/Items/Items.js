import React, { useEffect, useState } from "react";
import "./Items.css";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div id="items" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5"> Items</h1>
        <div className="items-container">
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
