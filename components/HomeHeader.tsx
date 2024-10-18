import Image from "next/image";
import CandlesImage from "@/public/candles.svg";

const HomeHeader = () => {
  return (
    <section className="h-screen flex items-center relative overflow-hidden">
      <div className="bg-glass  p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg animate-fade-in m-4 z-10 text-center md:text-right">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
          Мэргэжилтнүүдтэй нэгдэн
          <br />
          <span className="text-green-400">Арилжааны</span>
          <br />
          арга барилдаа хувьсгал хий!
        </h1>
        <p className="mb-8 sm:mb-12 lg:mb-16">
          Бидэнтэй хамтран Live сигнал, зах зээлийн мэргэжлийн дүн <br />
          шинжилгээ, хувьчилсан хичээлүүд, болон мэргэжил нэгт хүмүүсээр <br />
          хүрээлүүлсэн орчинд нэгдээрэй
        </p>
        <a
          href="/signup"
          className="px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 text-lg"
        >
          Get Started
        </a>
      </div>
      <Image
        src={CandlesImage}
        alt="Candles Image"
        width={800}
        className="z-0 absolute right-0 top-0"
      />
    </section>
  );
};

export default HomeHeader;
