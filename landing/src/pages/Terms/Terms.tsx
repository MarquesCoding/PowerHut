import React from "react";
import Hero from "../../components/Hero/Hero";
import Solutions from "../../components/Solutions/Solutions";
import Features from "../../components/Features/Features";
import Panel from "../../components/Panel/Panel";
import {Disclosure, Transition} from "@headlessui/react";
import {ArrowDown} from "@phosphor-icons/react";

const Terms: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-screen h-full bg-[#0c0f12]  flex flex-col text-white">
        <div className="flex flex-col gap-2 text-center py-40">
          <p className="text-3xl sm:text-5xl">Terms and conditions</p>
          <p className="opacity-50 text-sm sm:text-md">Last updated: August 25th, 2023</p>
          <p className="opacity-50 text-xs sm:text-sm">Please read these terms and conditions carefully before using our services.</p>
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
export default Terms;
