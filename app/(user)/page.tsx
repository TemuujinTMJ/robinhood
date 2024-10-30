import React from "react";
import Head from "next/head";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import Roadmap from "@/components/Roadmap";
import HomeHeader from "@/components/HomeHeader";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to Robinhood Club</title>
        <meta
          name="description"
          content="Master your portfolio and trading skills with ease!"
        />
      </Head>
      <HomeHeader />
      <Partners />
      <Roadmap />
      <FeatureCard />
      <PricingCard />
      <Testimonial />

      {/* <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
      `}</style> */}
    </>
  );
};

export default Home;
