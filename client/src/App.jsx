import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/ui/Nav/Nav";
import Footer from "./components/ui/Footer/Footer";
import Content from "./components/ui/Content/Content";

function App() {
  return (
    <>
      <Nav />
      <Content />
      <Footer />
    </>
  );
}

export default App;
