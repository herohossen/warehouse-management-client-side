import React from "react";
import "../AddInventoryItem/AddInventoryItem.css";


const AddInventoryItem = () => {
  //Form Submit funtion post start
  const handelAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const shipping = e.target.shipping.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const item = {
      name,
      supplier,
      price,
      stock,
      shipping,
      quantity,
      description,
      img,
    };

    //post Request send data nto server
    fetch("https://inventory-management-p11.herokuapp.com/item", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert(
          `User Name ${item.name} and Email ${item.category} inserted successfully`
        );
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Add a Inventory Item</h2>
      <form onSubmit={handelAddUser}>
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
        <input
          className="btn btn-primary"
          type="submit"
          value="Add Inventory Item"
        />
      </form>
    </div>
  );
};

export default AddInventoryItem;
