import React from "react";
import FormHome from "../components/home/FormHome";
import Footer from "./Footer";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="pokedex">
      <img src="/poketitle.jpg" className="pokedex__img" />
      <h2 className="pokedex__subtitle">Hi Trainer!</h2>
      <p className="pokedex__text">To start, tell me your name</p>
      <FormHome />
      <Footer />
    </div>
  );
};

export default Home;
