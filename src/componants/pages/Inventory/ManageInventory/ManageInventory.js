import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../../styles/Shared/PageTitle";
import "../ManageInventory/ManageInventory.css";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://inventory-management-p11.herokuapp.com/item")
      // fetch("https://inventory-management-p11.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // Delete Button
  const handeluserdelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("Deleting user", id);
      const url = `https://inventory-management-p11.herokuapp.com/item/${id}`;
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
      <PageTitle title={"Manage Inventory"}></PageTitle>
      <h1 className="text-center">Mange Inventory</h1>
      <h1>Items Count: {items.length}</h1>
      <div className="text-center">
        <button
          className="me-auto btn btn-primary"
          onClick={() => navigate(`/addinventoryitem`)}
        >
          Add Item
        </button>
      </div>
      <br />
      <br />
      <Table striped bordered hover size="sm" className="manageInventory">
        <thead className="">
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>Suplaier</th>
            <th>Quantity</th>
            <th>Img</th>
            <th>Actions</th>
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
              {/* <td>
                <button>Update</button>
              </td> */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handeluserdelete(item._id)}
                >
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
