import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoomProvider from "./lib/context";
import Navbar from "./ui/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <RoomProvider>
        <BrowserRouter>
          <Navbar />
          <h1>Home</h1>
        </BrowserRouter>
      </RoomProvider>
    </>
  );
}

export default App;
