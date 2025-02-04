"use client";
import React, { useState } from "react";
import Container from "./container";

type Plan = {
  name: string;
  price: { monthly: string; annual: string };
  description: string;
  features: string[];
  isPopular?: boolean;
  originalPrice?: string;
  originalPriceAnnual?: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: { monthly: "$0", annual: "$0" },
    description: "Try RobinHood for free",
    features: [
      "✅ Sl тооцоолуур",
      "✅ Telegram суваг",
      "✅ Арилжаачны төрөл асуулга",
      "❌ Аргачлал тодорхойлох асуулга",
      "❌ Суурь хичээлүүд",
      "❌ Арилжааны signal",
      "❌ Live арилжаа",
      "❌ Арилжааны журнал",
      "❌ Ахисан түвшний хичээлүүд",
      "❌ E-hub",
      "❌ Copy Trade",
      "❌ 24/7 чат, зөвлөгөө",
      "❌ 50,000$ арилжааны данс",
      "❌ Live chat & Q&A",
      "❌ E-hub VIP гишүүнчлэл",
    ],
    originalPrice: "$0",
    originalPriceAnnual: "$0",
  },
  {
    name: "Starter",
    price: { monthly: "$29.95", annual: "$299.5" },
    description: "per month billed annually",
    features: [
      "✅ Sl тооцоолуур",
      "✅ Telegram суваг",
      "✅ Арилжаачны төрөл асуулга",
      "✅ Аргачлал тодорхойлох асуулга",
      "✅ Суурь хичээлүүд",
      "✅ Арилжааны signal",
      "❌ Live арилжаа",
      "❌ Арилжааны журнал",
      "❌ Ахисан түвшний хичээлүүд",
      "❌ E-hub",
      "❌ Copy Trade",
      "❌ 24/7 чат, зөвлөгөө",
      "❌ 50,000$ арилжааны данс",
      "❌ Live chat & Q&A",
      "❌ E-hub VIP гишүүнчлэл",
    ],
    originalPrice: "$69.95",
    originalPriceAnnual: "$359.95",
  },
  {
    name: "Standard",
    price: { monthly: "$99.95", annual: "$999.5" },
    description: "per month billed annually",
    features: [
      "✅ Sl тооцоолуур",
      "✅ Telegram суваг",
      "✅ Арилжаачны төрөл асуулга",
      "✅ Аргачлал тодорхойлох асуулга",
      "✅ Суурь хичээлүүд",
      "✅ Арилжааны signal",
      "✅ Live арилжаа",
      "✅ Арилжааны журнал",
      "✅ Ахисан түвшний хичээлүүд",
      "✅ E-hub",
      "❌ Copy Trade",
      "❌ 24/7 чат, зөвлөгөө",
      "❌ 50,000$ арилжааны данс",
      "❌ Live chat & Q&A",
      "❌ E-hub VIP гишүүнчлэл",
    ],
    originalPrice: "$199.95",
    isPopular: true,
    originalPriceAnnual: "$2399.95",
  },
  {
    name: "Advanced",
    price: { monthly: "$6999.95", annual: "$6999.95" },
    description: "per month billed annually",
    features: [
      "✅ Sl тооцоолуур",
      "✅ Telegram суваг",
      "✅ Арилжаачны төрөл асуулга",
      "✅ Аргачлал тодорхойлох асуулга",
      "✅ Суурь хичээлүүд",
      "✅ Арилжааны signal",
      "✅ Live арилжаа",
      "✅ Арилжааны журнал",
      "✅ Ахисан түвшний хичээлүүд",
      "✅ E-hub",
      "✅ Copy Trade",
      "✅ 24/7 чат, зөвлөгөө",
      "✅ 50,000$ арилжааны данс",
      "✅ Live chat & Q&A",
      "✅ E-hub VIP гишүүнчлэл",
    ],
    originalPrice: "LifeTime",
    originalPriceAnnual: "LifeTime",
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
  setHover,
  hover,
  originalPriceAnnual,
}: Plan & {
  isAnnual: boolean;
  hover: number;
  setHover: (number: number) => void;
}) => {
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
    setHover(1);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
    setHover(0);
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
        boxShadow: isHovering ? `0 0 15px rgba(255, 255, 255, 0.1)` : "none",
        transition: "transform 0.3s ease-in-out",
      }}
      className={`rounded-lg transform ${
        isHovering
          ? "scale-105"
          : hover === 0 && isPopular
          ? "scale-105"
          : "scale-100 opacity-50"
      }`}
    >
      <div
        className={`shadow-lg flex flex-col bg-glass rounded-lg p-6 justify-between h-full gap-4 text-center ${
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
          <p
            className={`${
              originalPrice !== "LifeTime" ? "line-through " : "bg-green-600 rounded"
            } text-gray-500"`}
          >
            {isAnnual ? originalPriceAnnual : originalPrice}
          </p>
          <p className="text-5xl font-bold mb-4">
            {isAnnual ? price.annual : price.monthly}
          </p>
          <p className="mb-4">{description}</p>

          <ul className="text-left space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`${
                  feature.includes("❌") &&
                  `line-through text-gray-500 items-center hidden md:block`
                }`}
              >
                {feature.includes("❌") ? (
                  <>❌{feature.replace("❌", "")}</>
                ) : (
                  feature
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-green-700 text-white py-2 px-6 rounded-lg mb-4">
          Get {name}
        </button>
      </div>
    </div>
  );
};

const PricingCard = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hover, setHover] = useState(0);

  return (
    <Container>
      <div className="py-12 px-6">
        <div className="text-center mb-12">
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
              Annually <span className="text-green-600">Save 6%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
              isAnnual={isAnnual}
              hover={hover}
              setHover={setHover}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingCard;
