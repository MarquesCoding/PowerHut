import React from "react";
import {PricingTier} from "../PricingCard/PricingCard";
import PricingCard from "../PricingCard/PricingCard";

const pricingTiers: PricingTier[] = [
  {
    title: 'Dev',
    price: 4,
    features: ['Ryzen 5 3600 Shared CPU*', '4GB DDR4 RAM**','1GBit/s Connection', '25GB NVME SSD', 'Shared IP'],
    button: 'Get Started',
  },
  {
    title: 'Advanced',
    price: 10,
    features: ['Ryzen 7 7700 Dedicated CPU*', '10GB DDR4 RAM**','1GBit/s Connection', '50GB NVME SSD', 'Dedicated IP'],
    button: 'Get Started',
    pill: {
      text: 'Most Popular',
    }
  },
  {
    title: 'Pro',
    price: 16,
    features: ['Ryzen 9 7950X3D Dedicated CPU*', '12GB DDR4 RAM**','1GBit/s Connection', '100GB NVME SSD', 'Dedicated IP'],
    button: 'Get Started',
  },
];

const Features: React.FunctionComponent = () => {
  return (
    <div id="features" className="w-screen h-auto py-12 bg-dark-100 flex flex-col items-center justify-center gap-8">
      <p className="text-center flex flex-col max-w-xl">
        <span className="sm:text-3xl font-semibold text-white">Everything you need to run your minecraft server</span>
        <span className="text-sm sm:text-md max-w-sm sm:max-w-full text-center text-white">
          <span className="opacity-50">
            PowerHut provides
            {" "}
          </span>
          <span className="text-green-400 opacity-100">
            the best value for your money
          </span>
          <span className="opacity-50">, with the highest quality software and hardware, packed with the best support in the industry.
          </span>
        </span>
      </p>
      <div className="flex w-full h-auto justify-center items-center">
        <div className="flex w-full h-auto flex-wrap max-w-4xl">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
          <p className="text-center text-white opacity-50 w-full text-xs">*CPU will vary based on server location - will be equivalent</p>
          <p className="text-center text-white opacity-50 w-full text-xs">** Additional RAM can be purchased at checkout</p>
        </div>
      </div>
    </div>
  )
}
export default Features;
