"use client";
import React from "react";
import Head from "next/head";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  const features = [
    {
      title: "Lot Pip Calculator",
      description:
        "Calculate pip and lot sizes accurately and optimize your trades with our advanced tools.",
      imagePlaceholder: "Placeholder Image for Lot Pip Calculator",
    },
    {
      title: "Psychology Test",
      description:
        "Understand your trading mindset and improve your decision-making skills with our psychology tests.",
      imagePlaceholder: "Placeholder Image for Psychology Test",
    },
    {
      title: "Courses (Coming Soon)",
      description:
        "Learn from expert traders and enhance your skills with upcoming comprehensive courses.",
      imagePlaceholder: "Placeholder Image for Courses",
    },
  ];

  const testimonials = [
    {
      quote:
        "Thanks to Robinhood Club, I was able to improve my trading skills tremendously!",
      author: "John D.",
    },
    {
      quote:
        "The resources and community support have been invaluable to my trading journey.",
      author: "Sarah L.",
    },
    {
      quote:
        "I love the Lot Pip Calculator; it has helped me make better trading decisions.",
      author: "Michael S.",
    },
  ];

  return (
    <>
      <Head>
        <title>Welcome to Robinhood Club</title>
        <meta
          name="description"
          content="Master your portfolio and trading skills with ease!"
        />
      </Head>
      <div className="bg-gray-900 text-white">
        {/* Hero Section with Glassmorphism */}
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 relative">
          <div className="bg-glass backdrop-blur-lg p-12 rounded-lg shadow-lg animate-fade-in">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to <span className="text-green-400">Robinhood Club</span>
            </h1>
            <p className="text-xl mb-8">
              Master your portfolio and trading skills with ease!
            </p>
            <a
              href="/signup"
              className="px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 text-lg"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Feature Section with Images and Glassmorphism */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  imagePlaceholder={feature.imagePlaceholder}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default Home;
