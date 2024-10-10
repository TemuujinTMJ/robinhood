import React from 'react';
import Head from 'next/head';

const coursesData = [
  { title: 'ICT', description: 'Learn the foundational concepts of Information and Communication Technology.' },
  { title: 'Elliot Wave', description: 'Discover the principles of the Elliott Wave Theory for market analysis.' },
  { title: 'Support and Resistance', description: 'Understand key levels in the market for effective trading decisions.' },
  { title: 'Fibonacci Retracement and Extensions', description: 'Master the use of Fibonacci tools for predicting price movements.' },
  { title: 'Chart Patterns', description: 'Identify and trade popular chart patterns for better entry and exit points.' },
  { title: 'Order Flow', description: 'Analyze the order flow to make informed trading decisions.' },
  { title: 'Risk Management', description: 'Learn how to manage risk effectively in your trading strategy.' },
  { title: 'Psychology', description: 'Understand the psychological aspects of trading for better decision-making.' },
];

const Courses = () => {
  return (
    <>
      <Head>
        <title>Courses - Robinhood Club</title>
        <meta name="description" content="Explore our trading courses to enhance your skills." />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
              <div className="h-48 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;