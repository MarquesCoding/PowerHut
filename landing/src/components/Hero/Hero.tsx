import React from "react";
import MinecraftBackground from '../../public/minecraft-bg.jpg';
import Pill from "../Pill/Pill";
import Space from "../Space/Space";
import Titlebar from "../Titlebar/Titlebar";
import Logo from '../../public/logo-white.png';
import {motion} from "framer-motion";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col" id="hero">
      <div className="h-full bg-black w-full flex justify-center items-center relative">
        <div className="w-full h-full bg-cover bg-center bg-opacity-40 opacity-20" style={{backgroundImage: `url(${MinecraftBackground})`}}>
        </div>
        <div className="w-full h-full absolute bg-gradient-to-t to-green-950/30 from-black opacity-40">
        </div>
        <div className="opacity-40 w-full h-full absolute -z-5">
          <Space/>
        </div>

        <motion.div
          className="w-full h-full absolute flex gap-4 flex-col items-center justify-center text-white"
          animate={{
            opacity: [0, 1],
            translateY: [30, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
            {/*<Notification/>*/}
            <img src={Logo} alt="logo" className="w-6"/>
            <Pill text={"Best Minecraft Hosting you've ever seen!"}/>
            <p className="text-4xl sm:text-7xl max-w-4xl font-bold text-center">Minecraft Server Hosting from the future!</p>
            <p className="text-sm sm:text-lg font-sans max-w-sm sm:max-w-md text-center opacity-50">We provide the best minecraft hosting services for all your unlimited gaming needs.</p>
            <div className="flex gap-2 pt-4">
              {/*<div className="text-center hover:bg-green-400/40 duration-300 cursor-pointer border border-white border-opacity-0 hover:border hover:border-green-300 w-fit px-4 py-2 bg-green-400/80 text-white rounded">*/}
              {/*  Try for free*/}
              {/*</div>*/}
              <a href="#features" className="text-center hover:bg-gray-400/40 duration-300 cursor-pointer border border-white border-opacity-0 hover:border hover:border-gray-300 w-fit px-4 py-2 bg-gray-600/80 text-white rounded">
                View our offerings
              </a>
            </div>
          <div className="z-10 pt-4 flex gap-2 text-white flex-col items-center">
            <p>Want to try out our demo minecraft server?</p>
            <div className=" w-fit border border-white/20 hover:bg-gray-400/20 hover:text-green-400 duration-300 cursor-text px-2 py-1 rounded">
              mc-eu.powerhut.pro
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 z-10 pb-4 animate-bounce transition opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
        <div className="absolute bottom-0 flex h-auto w-full flex-row items-center justify-center pt-4 opacity-100">
          <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/30"></div>
          <div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
      </div>
    </div>
  )
}
export default Hero;
