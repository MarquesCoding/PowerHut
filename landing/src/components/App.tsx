import React from "react";
import Titlebar from "./Titlebar/Titlebar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import Notification from "./Notification/Notification";

const App: React.FunctionComponent = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen">
        <Hero/>
      </div>
      <div className="w-screen h-auto bg-blue-400">
        <Features/>
      </div>
      <div className="w-screen h-auto">
        <Footer/>
      </div>
    </div>
  )
}

export default App
