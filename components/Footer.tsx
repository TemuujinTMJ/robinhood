import React from "react";
import Ig from "@/public/ig.png";
import Yt from "@/public/yt.png";
import Fb from "@/public/fb.png";
import Tg from "@/public/tg.png";
import Image from "next/image";
import Logo from "@/public/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-4">
      <div className="bg-glass backdrop-blur-lg mx-auto text-center text-white grid md:grid-cols-3 grid-cols-1 items-center p-4 rounded-t-xl justify-between">
        <div>
          <Image src={Logo} alt="logo" width={150} className="self-center place-self-center"/>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Robinhood Club. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 items-center">
          <a
            href="https://www.facebook.com/robinhood.trading"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Fb} width={16} height={16} alt="Fb" />
          </a>
          <a
            href="https://www.youtube.com/@Robin_Hood2629"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Yt} width={16} height={16} alt="Yt" />
          </a>
          <a
            href="https://www.instagram.com/robinhood_academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Ig} width={16} height={16} alt="ig" />
          </a>
          <a
            href="https://t.me/RHPUBLICROOM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Tg} width={16} height={16} alt="tg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
