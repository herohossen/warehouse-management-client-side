import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pages/AddItem.css";
import useItemDetails from "../hookes/useItemDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import PageTitle from "../../styles/Shared/PageTitle";

const AddItem = () => {
  // const [item, setItem] = useState([]);
  // const { itemId } = useParams();
  // const [item] = useItemDetails(itemId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    // const value = event.target.address.value;
    event.preventDefault();
    const info = {
      email: user.email,
      // item: item.name,
      // itemId: itemId,
      name: event.target.name.value,
      supplier: event.target.supplier.value,
      price: event.target.price.value,
      img: event.target.img.value,
      stock: event.target.stock.value,
      shipping: event.target.shipping.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
    };
    console.log(info);
    axios
      .post("https://inventory-management-p11.herokuapp.com/item", info)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "New Item Added Successfully",
            showConfirmButton: false,
            timer: 2000,
          });

          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <PageTitle title={"Add Item"}></PageTitle>
      <h1>
        <u>Add New Item</u>
      </h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.displayName}
          name="displayName"
          placeholder="name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="item name"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="supplier"
          placeholder="supplier"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="price"
          placeholder="price"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="stock"
          placeholder="stock"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="shipping"
          placeholder="shipping"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="quantity"
          placeholder="quantity"
          required
        />
        <br />
        <textarea
          className="w-100 mb-2"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          cols="50"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="img"
          placeholder="img"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
