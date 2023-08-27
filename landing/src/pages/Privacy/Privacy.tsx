import React from "react";

const Privacy: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-screen h-full bg-[#0c0f12]  flex flex-col text-white">
        <div className="flex flex-col gap-2 text-center py-40">
          <p className="text-3xl sm:text-5xl">Privacy Policy</p>
          <p className="opacity-50 text-sm sm:text-md">Last updated: August 25th, 2023</p>
          <p className="opacity-50 text-xs sm:text-sm">Please read this privacy policy carefully before using our services.</p>
        </div>
        <div className="w-full flex items-center justify-center pb-40">
          <div className="flex flex-col w-full md:w-1/2 items-start gap-4 px-4">
            Coming soon
          </div>
        </div>
      </div>
    </>
  )
}
export default Privacy;
