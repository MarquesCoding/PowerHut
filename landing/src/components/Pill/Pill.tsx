import React from "react";

interface PillProps {
  text: string;
  icon?: string;
}
const Pill: React.FunctionComponent<PillProps> = ({text}) => {
  return (
    <div className="w-fit text-opacity-80 text-sm sm:text-md text-white px-4 py-2 rounded-full hover:bg-gray-300/5 duration-300 border hover:border-gray-400/10 border-gray-400/50">
      {text}
    </div>
  )
}
export default Pill;
