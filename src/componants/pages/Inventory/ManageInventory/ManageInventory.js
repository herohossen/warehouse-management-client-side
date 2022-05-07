import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../ManageInventory/ManageInventory.css";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8888/item")
      // fetch("https://inventory-management-p11.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // Delete Button
  const handeluserdelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("Deleting user", id);
      const url = `http://localhost:8888/item/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          // console.log(data)
          if (data.deletedCount > 0) {
            alert("Data Deleted");
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        })
      );
    }
  };
  return (
    <div>
      <h1>Items {items.length}</h1>
      <button onClick={() => navigate(`/addinventoryitem`)}>Add Item</button>
      <Table striped bordered hover size="sm" className="manageInventory">
        <thead className="">
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>Suplaier</th>
            <th>Quantity</th>
            <th>Img</th>
          </tr>
        </thead>
        {items.map((item) => (
          <tbody className="" key={item._id}>
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.supplier}</td>
              <td>{item.quantity}</td>
              <td>
                <img height={40} width={40} src={item.img} alt="" />
              </td>
              <td>
                <button>Update</button>
              </td>
              <td>
                <button onClick={() => handeluserdelete(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageInventory;
