import React from "react";
import Ig from '@/public/ig.png';
import Yt from '@/public/yt.png';
import Fb from '@/public/fb.png';
import Tg from '@/public/tg.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="bg-glass backdrop-blur-lg mx-auto max-w-5xl text-center text-white grid grid-cols-3 items-center p-4 rounded-t-md justify-between">
        <h2 className="text-2xl font-bold">Robinhood Club</h2>
        <p>
          &copy; {new Date().getFullYear()} Robinhood Club. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Fb} width={16} height={16} alt="Fb"/>
            </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Yt} width={16} height={16} alt="Yt"/>
            </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Ig} width={16} height={16} alt="ig" />
          </a>
          <a
            href="https://www.telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <Image src={Tg} width={16} height={16} alt="tg"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
