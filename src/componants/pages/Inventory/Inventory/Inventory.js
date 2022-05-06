import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useItemDetails from "../../../hookes/useItemDetails";
import "../Inventory/Inventory.css";

const Inventory = () => {
  const { itemId } = useParams();
  const [item, setItem] = useItemDetails(itemId);
  const [IncQuantity, setIncQuantity] = useState(0);
  console.log("p1", item.quantity);
  // fore navigation
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // event.preventDefault();
    const decQuantity = parseInt(event.target.quantity.value);
    if (decQuantity > 0) {
      const quantity = parseInt(event.target.quantity.value) - 1;
      const newQuantity = { quantity };
      (async () => {
        const { data } = await axios.put(
          `http://localhost:8888/item/${itemId}`,
          newQuantity
        );
        console.log("success", data);
        // alert('users added successfully!!!');
        // event.target.reset();
      })();
    } else {
      alert("Your Stock Is sold out");
      return;
    }
    alert("item is Delivered Successfully!!!");
    event.target.reset();
  };

  const handleIncreases = (event) => {
    const IncQuantity = parseInt(event.target.value);
    if (IncQuantity < 0) {
      alert("Negative input is not allowed");
    } else {
      console.log(IncQuantity);
      setIncQuantity(IncQuantity);
    }
  };

  const handleSubmitIncreases = (event) => {
    // event.preventDefault();
    const oldQuantity = parseInt(item.quantity);
    const quantity = oldQuantity + IncQuantity;
    if (quantity) {
      // const quantity = parseInt(event.target.quantity.value);
      const newQuantity = { quantity };
      (async () => {
        const { data } = await axios.put(
          `http://localhost:8888/item/${itemId}`,
          newQuantity
        );
        console.log("success", data);
        // alert('users added successfully!!!');
        // event.target.reset();
      })();
    }
  };
  return (
    <div className="inventory-container container mb-5">
      {/* <PageTitle title={'Inventory'}></PageTitle> */}
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-1 mt-5 flex-sm-wrap">
        <div className="col ps-0 bg-secondary bg-opacity-10">
          <h3 className="w-100 mx-auto text-center">item Details</h3>
          <form onSubmit={handleSubmit}>
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">item Name</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.name}
              name="name"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">item ID</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item._id}
              name="itemId"
              readOnly
              autoCapitalize="off"
            />
            <img
              // height={40}
              // width={40}
              className="w-25 mx-auto d-flex"
              src={item.img}
              alt="item"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Category</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.category}
              name="category"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Supplier</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.supplier}
              name="supplier"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">item Description</p>
            <textarea
              className="w-100 mx-2 mb-2 d-flex"
              type="comment"
              value={item.description}
              name="description"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Price in USD $</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.price}
              name="price"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Stock</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.stock}
              name="stock"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Ratings</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.ratings}
              name="ratings"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Ratings Count</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.ratingsCount}
              name="ratingsCount"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Shipping</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.shipping}
              name="shipping"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Quantity</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={item.quantity}
              name="quantity"
              readOnly
              autoCapitalize="off"
            />
            <div className="w-100 mx-auto h-25 d-flex justify-content-center">
              <button className="develope-button">Deliver</button>
            </div>
          </form>
        </div>
        <div className="col">
          <div className=" bg-info bg-opacity-25 p-5">
            <form onSubmit={handleSubmitIncreases}>
              <h3 className="w-100 mx-auto text-center">Increases Quantity</h3>
              <input
                // style={{ maxWidth: '150px' }}
                className="w-100 mx-auto mb-2"
                placeholder="Quantity"
                type="number"
                onChange={handleIncreases}
                // value="quantity"
                name="quantity"
              />
              <div className="w-100 mx-auto h-25 d-flex justify-content-center">
                <button className="increases-button">Increases</button>
              </div>
            </form>
          </div>
          <div className=" mt-5 bg-primary bg-opacity-50 p-5 d-flex justify-content-center">
            <button
              onClick={() => navigate("/manageInventory")}
              className="manage-inventory-button"
            >
              Manage Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
