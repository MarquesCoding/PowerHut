import React from 'react';

export interface PricingTier {
  title: string;
  price: number;
  features: string[];
  button: string;
  pill?: {
    text: string;
  }
}

const PricingCard: React.FC<PricingTier> = ({ title, price, features, button, pill }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="max-w-xs mx-auto bg-grey-900 border border-white border-opacity-0 hover:shadow-xl hover:border hover:border-opacity-20 hover:border-green-300 hover:shadow-green-400 hover:-translate-y-4 duration-300 shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            {pill && (
              <p className="text-sm w-fit bg-green-600 text-white py-1 px-3 rounded-full">
                {pill.text}
              </p>
            )}
          </div>
          <div className="flex flex-row font-semibold text-white mt-4">
            <span className="text-sm opacity-50">$</span>
            <span className="text-4xl">{price}</span>
          </div>
          <p className="text-white italic text-xs opacity-50">per month</p>
        </div>
        <ul className="mb-8 px-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center py-2">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-white">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6">
          <div className="text-center hover:bg-green-400/40 duration-300 cursor-pointer border border-white border-opacity-0 hover:border hover:border-green-300 w-full px-4 py-2 bg-green-400/80 text-white rounded">
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
