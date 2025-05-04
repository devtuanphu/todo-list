import React from "react";
import Banner from "../components/home/Banner";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Banner />
      <h1>Đây là home</h1>
      <Link to="/about">Click to about</Link>
    </div>
  );
};

export default Home;
