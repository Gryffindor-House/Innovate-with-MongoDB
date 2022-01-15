import React from "react";
import About from "./about";
import LoginForm from "./loginform";

export const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <About />
      </div>
      <div className="col-md-6">
        <LoginForm />
      </div>
    </div>
  );
};
