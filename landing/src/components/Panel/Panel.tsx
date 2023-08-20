import React from "react";
import PanelImage from '../../public/panel.png'
const Panel: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 flex h-1 w-full flex-row items-center justify-center opacity-100">
        <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/30"></div>
        <div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/30"></div>
      </div>
      <div className="w-screen h-auto py-12 bg-dark-100 flex flex-col items-center justify-center gap-8">
        <p className="text-center flex flex-col max-w-xl">
          <span className="sm:text-3xl font-semibold text-white">Our Custom Game Panel</span>
          <span className="text-sm sm:text-md max-w-sm sm:max-w-full text-center text-white">
          <span className="opacity-50">
            PowerHut provides
            {" "}
          </span>
          <span className="text-green-400 opacity-100">
            a world-class game panel
          </span>
          <span className="opacity-50">, with all the best features, packed into a single panel.
          </span>
        </span>
        </p>
        <div className="w-2/3 max-w-3xl h-auto bg-orange-100 rounded shadow-green-400">
          <img src={PanelImage} alt={"Panel"} className="w-full h-full rounded" />
        </div>
      </div>
    </div>
  )
}

export default Panel;
