import React from "react";

export default function ForexPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-12 px-4 md:px-16 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-7xl w-full text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          FOREX гэж юу вэ?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Форекс буюу гадаад валютын зах зээл нь дэлхийн хамгийн том санхүүгийн зах зээл бөгөөд өдөр бүр 6 их наяд долларын арилжаа хийгддэг.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full">
        {/* Informational Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
              FOREX зах зээлийн тухай
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Форекс арилжаа нь валютын ханшны өсөлт, бууралтаас ашиг олох зорилгоор хийгддэг бөгөөд зах зээл нь 24 цагийн туршид ажиллаж байдаг. Арилжаачид валютын хосуудыг худалдаж авч, зарж, зах зээлийн ханшны хэлбэлзлийг ашиглан ашиг олох боломжтой.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
              FOREX зах зээлийн тоглогчид
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>🏦 <span className="font-semibold">Төв банкууд</span>: Валютын ханшийн зохицуулалт, бодлого хэрэгжүүлдэг.</li>
              <li>📉 <span className="font-semibold">Санхүүгийн байгууллагууд</span>: Банк болон хөрөнгө оруулалтын сангууд оролцдог.</li>
              <li>👨‍💻 <span className="font-semibold">Жижиглэнгийн арилжаачид</span>: Хувь хүмүүс бага хэмжээний хөрөнгөөр арилжаанд оролцдог.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
              FOREX-ийн давуу талууд
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>🌍 <span className="font-semibold">Дэлхийн цар хүрээ</span>: Өдөрт хэдэн их наяд долларын арилжаа хийгддэг.</li>
              <li>⌛ <span className="font-semibold">24 цагийн арилжаа</span>: Долоо хоногт таван өдөр, 24 цагийн турш арилжаа хийх боломжтой.</li>
              <li>⚖️ <span className="font-semibold">Өндөр хөшүүрэг</span>: Их хэмжээний арилжаа хийх боломж.</li>
            </ul>
          </section>
        </div>

        {/* Glassmorphism Card - Features and Tips */}
        <div className="bg-glass backdrop-blur-md p-8 rounded-lg shadow-lg text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-6">FOREX-ийн онцлог</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>🌍 Дэлхийн хамгийн том зах зээл</li>
            <li>💸 Өдөрт хэдэн их наяд долларын арилжаа хийгддэг</li>
            <li>⚖️ Валютын ханшны хэлбэлзлийг ашиглах боломж</li>
            <li>📊 Бага зардалтай арилжааны боломж</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-10 mb-6">Форекс арилжааны зөвлөмжүүд</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>🎯 <span className="font-semibold">Судалгаа хийх</span>: Валютын зах зээлийн чиг хандлагыг судалж, шийдвэр гарга.</li>
            <li>⚠️ <span className="font-semibold">Эрсдэлийг удирдах</span>: Хөрөнгөө хамгаалахын тулд эрсдэлийг удирдах стратеги ашигла.</li>
            <li>📉 <span className="font-semibold">Сэтгэл хөдлөлөө хянах</span>: Арилжааг хэт сэтгэл хөдлөлөөс сэргийлэн удирд.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 max-w-7xl w-full text-center">
        <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
          Арилжааны сургалтанд бүртгүүлэх
        </button>
      </div>
    </div>
  );
}