import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../../styles/pages/ManageItem.css";
import PageTitle from "../../styles/Shared/PageTitle";

const ManageItem = () => {
  const [items, setItems] = useState([]);
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
    <div className="w-100 p-5 mx-auto">
      <PageTitle title={"Manage Item"}></PageTitle>
      <h1 className="text-center">Manage Item</h1>
      <h2> Item Count: {items.length}</h2>
      <br />
      <br />
      <Table bordered hover size="sm" className="manageItems">
        <thead className="manageItems">
          <tr>
            <th>Img</th>
            <th>Id</th>
            <th>name</th>
            <th>Suplaier</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        {items.map((item) => (
          <tbody className="manageItems" key={item._id}>
            <tr>
              <td>
                <img height={40} width={40} src={item.img} alt="" />
              </td>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.supplier}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>

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

export default ManageItem;
