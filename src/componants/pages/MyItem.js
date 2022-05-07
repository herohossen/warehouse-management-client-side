import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "../../styles/pages/MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [userItem, setUserItem] = useState([]);
  // const navigate = useNavigate();
useEffect(()=>{
const getUserItems = async()=>{
  const email = user?.email;
  const url = `http://localhost:8888/useritem?email=${email}`;
  const {data} =await axios.get(url);
  setUserItem(data);
}
getUserItems();
}, [user])

        


  return (       
     <div className='w-50 mx-auto'>
  <h2>Your : {userItem.length}</h2>
  {
      userItem.map(userItem =><div key={userItem._id}>
          <p>{userItem.email} : {userItem.name}</p>
      </div>)
  }
</div>)
};

export default MyItem;
