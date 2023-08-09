import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="fixed bottom-0 flex items-center justify-center w-screen h-8 py-8 text-center">
      <p className="text-gray-400/50 hover:text-gray-50 duration-300">PowerHut LLC &copy; {new Date().getFullYear()}</p>
    </div>
  )
}
export default Footer;
