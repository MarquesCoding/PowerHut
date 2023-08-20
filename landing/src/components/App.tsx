import React from "react";
import Titlebar from "./Titlebar/Titlebar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import Notification from "./Notification/Notification";
import Panel from "./Panel/Panel";
import Solutions from "./Solutions/Solutions";

const App: React.FunctionComponent = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex w-full h-2 bg-green-400">

      </div>
      <div className="w-screen h-screen">
        <Hero/>
      </div>
      <div className="w-screen h-auto">
        <Solutions/>
      </div>
      <div className="w-screen h-auto">
        <Features/>
      </div>
      <div className="w-screen h-auto">
        <Panel/>
      </div>
      <div className="w-screen h-auto">
        <Footer/>
      </div>
    </div>
  )
}

export default App
