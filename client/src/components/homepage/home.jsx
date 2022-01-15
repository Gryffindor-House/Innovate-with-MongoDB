import React from "react";
import About from "./about";
import LoginForm from "./loginform";
import Nav from "./nav";
import Footer from "./footer";

export const Home = () => {
  return (
    <>
      <Nav />
      <div className="row">
        <About />
      </div>
      <div className="row">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};
