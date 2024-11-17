import React from "react";
import Product from "../Components/Product";
import Banner from "./Banner";
import BrandName from "../Components/BrandName";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="w-11/12 mx-auto"> 
        <BrandName></BrandName>
      </section>
      <Product></Product>
    </div>
  );
};

export default Home;
