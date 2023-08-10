import React from 'react';
import Logo from '../../public/logo.png';

const titleBarUrls  = [
  {
    name: "Hosting",
    items: [
      {
        name: 'Server Hosting',
        description: "Looking to play minecraft with your friends? Then this is for you!"
      },
      {
        name: 'Dedicated Servers',
        description: "Coming soon!",
      },
      {
        name: 'Discord Bots',
        description: "Coming soon!",
      }
    ]
  },
  {
    name: "Information",
    items: [
      {
        name: "About Us",
        description: "Learn more about us and our mission."
      },
      {
        name: "Our Panel",
        description: "Learn more about our panel and how to use it."
      },
      {
        name: "Support",
        description: "Learn more about our support and how to get it."
      }
    ]
  }
]


const Titlebar: React.FunctionComponent = () => {
  return (
   <div className="absolute w-screen z-10 flex flex-col overflow-hidden">
     {/*<div className="w-full z-10 h-auto top-0 text-center text-white bg-green-400">*/}
     {/*  Use Code <span>SWITCH</span> for 10% off your first month!*/}
     {/*</div>*/}
     <div className="z-10 p-7 flex flex-col">
       <div className="w-full h-full flex items-center justify-between">
         <div>
           <img src={Logo} alt="Logo" className="w-24"/>
         </div>
         <div className="sm:hidden flex-col gap-2 opacity-50 flex">
           <span className="w-8 h-1 bg-white"></span>
           <span className="w-8 h-1 bg-white"></span>
           <span className="w-8 h-1 bg-white"></span>

         </div>
         <div className="hidden sm:flex">
           <ul className="flex gap-8 text-white items-center">
             {titleBarUrls.map((item, index) => (
               <li className="hover:opacity-50 cursor-pointer duration-300" key={index}>
                 {item.name}
               </li>
             ))}
             <div className="text-center hover:bg-green-400/40 duration-300 cursor-pointer border border-white border-opacity-0 hover:border hover:border-green-300 w-fit px-4 py-2 bg-green-400/80 text-white rounded">
               Login
             </div>
           </ul>
         </div>
       </div>
       <div className="relative bottom-0 flex h-1 w-full flex-row items-center justify-center pt-4 opacity-100">
         <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/30"></div>
         <div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/30"></div>
       </div>
     </div>
   </div>
  )
}
export default Titlebar;
