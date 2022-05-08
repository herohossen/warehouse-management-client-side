import React from "react";
import "./Home.css";
import Banner from '../Banner/Banner'
import Items from '../Items/Items';
import PageTitle from "../../../../styles/Shared/PageTitle";
import Review from "../Review/Review";
import Info from "../Info/Info";
import { useNavigate } from "react-router-dom";
// import img1 from "../../images/1.jpg";
// import { Carousel } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle title={"Home"}></PageTitle>
      <Banner />

      <Items />
      {/* manage inventory button */}
      <div className="p-3 d-flex justify-content-center">
        <button
          onClick={() => navigate("/manageinventory")}
          className="btn btn-primary"
        >
          Manage Inventory
        </button>
      </div>
      <Review />
      <Info />
    </div>
  );
};

export default Home;
