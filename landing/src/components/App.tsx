import React from "react";
import Footer from "./Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Terms from "../pages/Terms/Terms";
import Titlebar from "./Titlebar/Titlebar";
import Privacy from "../pages/Privacy/Privacy";

const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <div className="relative overflow-hidden flex flex-col h-full">
        <div className="absolute top-0 z-10 flex items-center h-auto py-2 gap-2 justify-center w-full bg-green-400">
          <div className="w-fit h-fit bg-[#0c0f12] rounded text-white px-2 py-1 shadow-2xl shadow-green-500">
            CHANGE
          </div>
          <p>Enjoy 20% off all plans, for new and exisiting customers!</p>
        </div>
          <Titlebar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
