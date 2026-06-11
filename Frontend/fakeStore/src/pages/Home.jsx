import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <div className="grid grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
