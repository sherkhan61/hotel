import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoomProvider from "./lib/context";
import Navbar from "./ui/Navbar";
import "./App.css";
import {Routes} from "./Routes";


function App() {
  return (
    <>
      <RoomProvider>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </RoomProvider>
    </>
  );
}

export default App;
