import React from 'react';
import '../../styles/pages/AddItem.css'

const AddItem = () => {
      //Form Submit funtion post start
  const handelAddUser = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const ratings = e.target.ratings.value;
    const ratingsCount = e.target.ratingsCount.value;
    const img = e.target.img.value;
    const shipping = e.target.shipping.value;
    const quantity = e.target.quantity.value;
    const item = { category,name, supplier,description,price,stock,ratings,ratingsCount,img,shipping,quantity};

    //post Request send data nto server
    fetch("http://localhost:8888/item", {
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
        <div>
        <h1>Insert A new user</h1>
        <form onSubmit={handelAddUser}>
          <input type="text" name="category" placeholder="Name" required />
          <input type="text" name="name" placeholder="Email" required />
          <input type="text" name="supplier" placeholder="Email" required />      
          <input type="text" name="description" placeholder="Email" required />
          <input type="text" name="price" placeholder="Email" required />
          <input type="text" name="stock" placeholder="Email" required />
          <input type="text" name="ratings" placeholder="Email" required />
          <input type="text" name="ratingsCount" placeholder="Email" required />
          <input type="text" name="img" placeholder="Email" required />
          <input type="text" name="shipping" placeholder="Email" required />
          <input type="text" name="quantity" placeholder="Email" required />
          <input type="submit" value="Add Item" />
        </form>
      </div>
    );
};

export default AddItem;