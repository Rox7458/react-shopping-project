import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
