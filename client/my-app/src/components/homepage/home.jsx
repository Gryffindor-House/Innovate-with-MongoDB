import React from 'react';
import About from './about';
import LoginForm from './loginform';
import Nav from './nav';
import Footer from './footer';

export const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <About />
      </div>
      <div className="flex">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};
