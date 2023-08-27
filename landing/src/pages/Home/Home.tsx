import React from "react";
import Hero from "../../components/Hero/Hero";
import Solutions from "../../components/Solutions/Solutions";
import Features from "../../components/Features/Features";
import Panel from "../../components/Panel/Panel";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Hero/>
      </div>
      <div className="w-screen h-auto">
        <Solutions/>
      </div>
      <div className="w-screen h-auto">
        <Features/>
      </div>
      <div className="w-screen h-auto">
        <Panel/>
      </div>
    </>
  )
}
export default Home;
