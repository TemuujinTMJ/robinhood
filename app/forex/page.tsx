import React from 'react';
import Head from 'next/head';

const WhatIsForex = () => {
  return (
    <>
      <Head>
        <title>What is Forex? - Robinhood Club</title>
        <meta name="description" content="Learn about Forex trading and how it works." />
      </Head>
      <div className="bg-gray-900 text-white">
        {/* Hero Section with Glassmorphism */}
        <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
          <div className="bg-glass backdrop-blur-lg p-12 rounded-lg shadow-lg mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold mb-4">What is Forex?</h1>
            <p className="text-xl mb-8">
              Discover the world of Forex trading and its significance in the global market.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Understanding Forex Trading</h2>
            <div className="bg-glass backdrop-blur-md p-8 rounded-lg shadow-lg mx-auto max-w-3xl">
              {/* Placeholder Image */}
              <div className="h-48 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Placeholder Image for Forex Trading</span>
              </div>
              <p className="mb-6">
                Forex, or foreign exchange, is the global marketplace for trading national currencies against one another. 
                It is the largest financial market in the world, with trillions of dollars traded daily. 
                Forex trading allows individuals and institutions to speculate on the price movements of currency pairs.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Key Features of Forex Trading:</h3>
              <ul className="list-disc list-inside mb-6">
                <li>24-hour market: Forex is open 24 hours a day, five days a week.</li>
                <li>High liquidity: Forex is known for its high liquidity, allowing for quick trade execution.</li>
                <li>Leverage: Forex brokers often offer high leverage, enabling traders to control large positions with smaller amounts of capital.</li>
                <li>Diverse trading options: Traders can engage in spot trades, futures, options, and more.</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4">How to Start Trading Forex:</h3>
              <p>
                To start trading Forex, you will need to choose a reliable broker, set up a trading account, and develop a trading strategy. 
                It is also important to educate yourself about the market and practice with a demo account before trading with real money.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatIsForex;