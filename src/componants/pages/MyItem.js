import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import "../../styles/pages/MyItem.css";
import PageTitle from "../../styles/Shared/PageTitle";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [userItem, setUserItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserItems = async () => {
      const email = user?.email;
      const url = `https://inventory-management-p11.herokuapp.com/useritem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setUserItem(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/signin");
        }
      }
    };
    getUserItems();
  }, [user]);

  const handeluserdelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("Deleting user", id);
      const email = user?.email;
      const url = `https://inventory-management-p11.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          // console.log(data)
          if (data.deletedCount > 0) {
            alert("Data Deleted");
            const remaining = userItem.filter((item) => item._id !== id);
            setUserItem(remaining);
          }
        })
      );
    }
  };
  return (
    <div className="w-100 p-5 mx-auto">
      <PageTitle title={"My Item"}></PageTitle>
      <h1>My Item</h1>
      <h2>I have added items: {userItem.length}</h2>
      <Table bordered hover size="sm" className="myItems">
        <thead className="myItems">
          <tr>
            <th>Id</th>
            <th>Img</th>
            <th>name</th>
            <th>Suplaier</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        {userItem.map((userItem) => (
          <tbody className="myItems" key={userItem._id}>
            <tr>
              <td>{userItem._id}</td>
              <td>
                <img height={50} width={50} src={userItem.img} alt="" />
              </td>
              <td>{userItem.name}</td>
              <td>{userItem.supplier}</td>
              <td>{userItem.quantity}</td>

              {/* <td>
                <button>Update</button>
              </td> */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handeluserdelete(userItem._id)}
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

export default MyItem;
