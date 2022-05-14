import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../../UserSite/Banner/Banner";
import HomeProduct from "../../UserSite/HomeProduct/HomeProduct";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <HomeProduct></HomeProduct>
    </div>
  );
};

export default Home;
