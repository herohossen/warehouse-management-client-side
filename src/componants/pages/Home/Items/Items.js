import React, { useEffect, useState } from "react";
import "./Items.css";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetch("https://inventory-management-p11.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
      setLoader(false);
  }, []);


  return (
    <div id="items" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5"> Items</h1>
  
        {loader && <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>}
          
        
     
        <div className="items-container">
          {items.slice(0, 6).map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
