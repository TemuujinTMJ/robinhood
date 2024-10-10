import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="bg-glass backdrop-blur-lg p-6 rounded-lg mx-auto max-w-5xl text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Robinhood Club</h2>
        <p className="mb-4">
          Your go-to platform for mastering Forex trading and enhancing your skills.
        </p>
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Robinhood Club. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;