import React, {Fragment} from 'react';
import Logo from '../../public/logo-green.png';
import { motion } from 'framer-motion';
import {Menu, Transition} from "@headlessui/react";

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
]


const Titlebar: React.FunctionComponent = () => {

  const [loginDropdown, setLoginDropdown] = React.useState(false);


  return (
     <div className="absolute w-screen z-10 h-96 pointer-events-auto flex flex-col overflow-hidden">
       <div className="z-10 p-7 flex flex-col">
         <div className="w-full h-full flex items-center justify-between">
           <div className="flex flex-row gap-2 items-center">
             <img src={Logo} alt="Logo" className="w-8"/>
             <p className="text-white text-2xl font-semibold">PowerHut</p>
           </div>
           <div className="sm:hidden flex-col gap-2 opacity-50 flex">
             <span className="w-8 h-1 bg-white"></span>
             <span className="w-8 h-1 bg-white"></span>
             <span className="w-8 h-1 bg-white"></span>

           </div>
           <div className="hidden sm:flex">
             <ul className="flex gap-8 text-white items-center">
               {titleBarUrls.map((item, index) => (
                 <div className="text-right">
                   <Menu as="div" className="relative inline-block text-left">
                     <div>
                       <Menu.Button className="duration-300 inline-flex w-full justify-center px-4 py-2 text-md font-medium text-white hover:bg-opacity-30">
                         {item.name}
                       </Menu.Button>
                     </div>
                     <Transition
                       as={Fragment}
                       enter="transition ease-out duration-100"
                       enterFrom="transform opacity-0 scale-95"
                       enterTo="transform opacity-100 scale-100"
                       leave="transition ease-in duration-75"
                       leaveFrom="transform opacity-100 scale-100"
                       leaveTo="transform opacity-0 scale-95"
                     >
                       <Menu.Items className="absolute duration-300 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                         <div className="px-1 py-1 ">
                           <Menu.Item>
                             {({ active }) => (
                               <button
                                 onClick={() => window.location.href = 'https://dash.powerhut.pro/auth/login'}
                                 className={`${
                                   active ? 'bg-green-400 text-grey-900' : 'text-gray-900'
                                 } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}
                               >

                                 <div className="flex flex-col items-start">
                                   <p className="font-semibold">Minecraft Hosting</p>
                                   <p className="text-xs text-start">Looking to play minecraft with your friends? This is for you!</p>
                                 </div>
                               </button>
                             )}
                           </Menu.Item>
                           <Menu.Item>
                             {({ active }) => (
                               <button
                                 onClick={() => window.location.href = 'https://billing.powerhut.pro'}
                                 className={`${
                                   active ? 'bg-green-400 text-grey-900' : 'text-gray-900'
                                 } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}
                               >

                                 <div className="flex flex-col items-start">
                                   <p className="font-semibold">Discord Bots</p>
                                   <p className="text-xs text-start">Supercharge your Discord server with your own bot.</p>
                                 </div>
                               </button>
                             )}
                           </Menu.Item>
                         </div>
                       </Menu.Items>
                     </Transition>
                   </Menu>
                 </div>
               ))}
               <div className="text-right">
                 <Menu as="div" className="relative inline-block text-left">
                   <div>
                     <Menu.Button className="duration-300 inline-flex w-full justify-center rounded-md bg-green-400 px-4 py-2 text-md font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                       Login
                     </Menu.Button>
                   </div>
                   <Transition
                     as={Fragment}
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                   >
                     <Menu.Items className="absolute duration-300 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                       <div className="px-1 py-1 ">
                         <Menu.Item>
                           {({ active }) => (
                             <button
                               onClick={() => window.location.href = 'https://dash.powerhut.pro/auth/login'}
                               className={`${
                                 active ? 'bg-green-400 text-grey-900' : 'text-gray-900'
                               } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}
                             >

                               <div className="flex flex-col items-start">
                                  <p className="font-semibold">Panel Portal</p>
                                  <p className="text-xs">Login to our Game Portal</p>
                               </div>
                             </button>
                           )}
                         </Menu.Item>
                         <Menu.Item>
                           {({ active }) => (
                             <button
                               onClick={() => window.location.href = 'https://billing.powerhut.pro'}
                               className={`${
                                 active ? 'bg-green-400 text-grey-900' : 'text-gray-900'
                               } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}
                             >

                               <div className="flex flex-col items-start">
                                 <p className="font-semibold">Billing Portal</p>
                                 <p className="text-xs">Login to our Billing Portal</p>
                               </div>
                             </button>
                           )}
                         </Menu.Item>
                       </div>
                     </Menu.Items>
                   </Transition>
                 </Menu>
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
