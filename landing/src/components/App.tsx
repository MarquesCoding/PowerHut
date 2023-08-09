import React from "react";
import Titlebar from "./Titlebar/Titlebar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

const App: React.FunctionComponent = () => {
  return (
    <div className="">
      <Titlebar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
