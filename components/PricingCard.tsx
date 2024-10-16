"use state";
import React, { useState } from "react";

type Plan = {
  name: string;
  price: { monthly: string; annual: string };
  description: string;
  features: string[];
  isPopular?: boolean;
  originalPrice?: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    description: "Try RobinHood for free",
    features: ["✅ Sl Calculator", "✅ Public Telegram Channel", "✅ Quiz 1"],
  },
  {
    name: "Starter",
    price: { monthly: "$16", annual: "$12" },
    description: "per month billed annually",
    features: [
      "✅ Sl Calculator",
      "✅ Public Telegram Channel",
      "✅ Quiz 1",
      "✅ Quiz 2",
      "✅ Basic Courses",
      "✅ Signal",
    ],
    originalPrice: "$20",
  },
  {
    name: "Standard",
    price: { monthly: "$28", annual: "$20" },
    description: "per month billed annually",
    features: [
      "✅ Sl Calculator",
      "✅ Private Telegram Channel",
      "✅ Quiz 1",
      "✅ Quiz 2",
      "✅ Basic Courses",
      "✅ Signal",
      "✅ Live Trade",
      "✅ Trading Journal",
      "✅ Advanced Courses",
      "✅ E-HUB",
    ],
    originalPrice: "$33",
    isPopular: true,
  },
  {
    name: "Advanced",
    price: { monthly: "$80", annual: "$65" },
    description: "per month billed annually",
    features: [
      "✅ Sl Calculator",
      "✅ Private Telegram Channel",
      "✅ Quiz 1",
      "✅ Quiz 2",
      "✅ Basic Courses",
      "✅ Signal",
      "✅ Live Trade",
      "✅ Trading Journal",
      "✅ Advanced Courses",
      "✅ Copy Trade",
      "✅ MentorShip",
      "✅ 50'000$ Fund",
      "✅ Live chat & Q&A",
      "✅ E-HUB-VIP",
    ],
    originalPrice: "$108",
  },
];

const PlanCard = ({
  name,
  price,
  description,
  features,
  isPopular,
  originalPrice,
  isAnnual,
}: Plan & { isAnnual: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovering
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent)`
          : "transparent",
        border: isHovering ? "2px solid white" : "2px solid transparent",
        boxShadow: isHovering ? `0 0 15px rgba(255, 255, 255, 0.5)` : "none",
      }}
    >
      <div
        className={`shadow-lg flex flex-col bg-glass rounded-lg p-6 justify-between h-full gap-4   text-center  ${
          isPopular ? "border-4 border-purple-500 relative" : ""
        }`}
      >
        <div className="h-full">
          {isPopular && (
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full">
              Recommended
            </span>
          )}
          <h2 className="text-xl font-bold mb-4">{name}</h2>
          {originalPrice && (
            <p className="line-through text-gray-500">{originalPrice}</p>
          )}
          <p className="text-5xl font-bold mb-4">
            {isAnnual ? price.annual : price.monthly}
          </p>
          <p className="mb-4">{description}</p>

          <ul className="text-left space-y-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg mb-4">
          Get {name}
        </button>
      </div>
    </div>
  );
};
//   </CardWithCursorBorder>

const PricingCard = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className=" py-12 px-6">
      <div className="text-center mb-12 ">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsAnnual(false)}
            className={`py-2 px-6 rounded-full ${
              !isAnnual ? "bg-gray-800 text-white" : ""
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`py-2 px-6 rounded-full ${
              isAnnual ? "bg-gray-800 text-white" : ""
            }`}
          >
            Annually <span className="text-green-500">Save 40%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} isAnnual={isAnnual} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
