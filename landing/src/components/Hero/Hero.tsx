import React from "react";
import MinecraftBackground from '../../public/minecraft-bg.jpg';
import Pill from "../Pill/Pill";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative">
      <div className="w-full h-full bg-cover bg-center bg-opacity-40 opacity-20" style={{backgroundImage: `url(${MinecraftBackground})`}}>
      </div>
      <div className="w-full h-full absolute bg-gradient-to-t to-indigo-950 from-black opacity-50">
      </div>
      <div className="w-full h-full absolute flex gap-4 flex-col items-center justify-center text-white">
        <Pill text={"Best Minecraft Hosting you've ever seen!"}/>
        <p className="text-8xl font-bold text-center">PowerHut Hosting</p>
        <p className="text-lg font-sans max-w-md text-center opacity-50">We provide the best minecraft services for all your unlimited gaming needs.</p>
        {/*<div className="text-center font-semibold hover:bg-green-400/40 duration-300 cursor-pointer border border-white border-opacity-0 hover:border hover:border-green-300 w-fit px-4 py-2 bg-green-400/80 text-white rounded-lg">*/}
        {/*  Get Started*/}
        {/*</div>*/}
        Coming soon!
      </div>
    </div>
  )
}
export default Hero;
