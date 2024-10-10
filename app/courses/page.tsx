import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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

const comingSoonCourses = [
  { title: 'Advanced Trading Strategies' },
  { title: 'Technical Analysis 101' },
  { title: 'Fundamental Analysis' },
];

const Courses = () => {
  return (
    <>
      <Head>
        <title>Courses - Robinhood Club</title>
        <meta name="description" content="Explore our trading courses to enhance your skills." />
      </Head>
      <div className="bg-gray-900 text-white">
        {/* Hero Section with Glassmorphism */}
        <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
          <div className="bg-glass backdrop-blur-lg p-12 rounded-lg shadow-lg mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold mb-4">Our Courses</h1>
            <p className="text-xl mb-8">
              Enhance your trading skills with our comprehensive courses!
            </p>
          </div>
        </section>

        {/* Available Courses Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Available Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {coursesData.map((course, index) => (
                <div key={index} className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="h-48 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
                  <p>{course.description}</p>
                  <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 mt-4">
                      Learn More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Coming Soon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {comingSoonCourses.map((course, index) => (
                <div key={index} className="bg-gray-100/30 backdrop-blur-md border border-white/20 rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-200 mb-4">Details coming soon!</p>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded opacity-70 cursor-not-allowed" disabled>
                    Coming Soon
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;