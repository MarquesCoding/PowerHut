import React from "react";
import PanelImage from "../../public/panel.png";

const Solutions: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="w-screen h-auto py-12 bg-dark-100  flex flex-col items-center justify-center gap-8">
        <p className="text-center flex flex-col max-w-xl">
          <span className="bg-green-600 w-fit rounded-full self-center px-4 text-white mb-4">ALL-IN-ONE SOLUTION</span>
          <span className="sm:text-3xl font-semibold text-white">Everything you need, all in one place</span>
          <span className="text-sm sm:text-md max-w-sm sm:max-w-lg text-center text-white mt-2">
            <span className="opacity-50">All the benefits of going with us;
            </span>
            <span className="text-green-400 opacity-100">
              {" "}
              PowerHut
              {" "}
            </span>
            <span className="opacity-50">are listed below! Have a suggestion for something we should implement? Join our Discord and let us know!
            </span>
          </span>
        </p>
        <div className="w-full max-w-sm sm:max-w-3xl h-auto flex flex-col  sm:flex-row text-white gap-8 items-start">
          <div className="sm:w-1/3 h-auto flex sm:flex-col justify-center sm:justify-between gap-6">
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>No wait times, instant server uptime.</p>
            </div>
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>DDoS Protection to prevent downtime.</p>
            </div>
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>Compatibility with Paper, Spigot & Others.</p>
            </div>
          </div>
          <div className="sm:w-1/3 h-auto flex sm:flex-col justify-center sm:justify-between gap-6">
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>Complete SFTP access on all your server files.</p>
            </div>
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>Two factor authentication support.</p>
            </div>
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>No overloaded nodes.</p>
            </div>
          </div>
          <div className="sm:w-1/3 h-auto flex sm:flex-col justify-center sm:justify-between gap-6">
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>Easy to use game panel.</p>
            </div>
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>Easy to upload files and custom server JARs.</p>
            </div>
            <div className="w-fit flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p>Free reverse proxy for all your livemap needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-1 w-full flex-row items-center justify-center opacity-100">
        <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/30"></div>
        <div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/30"></div>
      </div>
    </div>
  )
}
export default Solutions;
