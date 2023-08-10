import React from "react";
import Logo from '../../public/logo.png';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="overflow-hidden bg-green-400 items-center text-white flex px-8 w-screen h-32">
      <div className="flex flex-col gap-1">
        <img className="w-32" src={Logo} alt="PowerHut Logo"/>
        <p className="text-white text-sm">
          PowerHut LLC &copy; {new Date().getFullYear()}
          {" "}
          <span>
        </span>
        </p>
        {/*@ts-ignore*/}
        <a className="hover:opacity-100 opacity-50 text-xs duration-300" href={`https://github.com/MarquesCoding/PowerHut/commit/${__COMMIT_HASH__}`}>
          {/*@ts-ignore*/}
          Version - {__COMMIT_HASH__}
        </a>
      </div>
    </div>
  )
}
export default Footer;
