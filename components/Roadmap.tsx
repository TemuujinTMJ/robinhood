"use client";
import React, { useState } from "react";

const StepsSection = () => {
  const steps = [
    {
      title: "Нэгдэх",
      description:
        "Өөрийгөө сорьж арилжаанд оролцохыг шийдвэрлэсэн таныг манайд нэгдэхэд баяр хүргэе!",
      buttonLabel: "Нэгдэх",
      icon: "🚀",
    },
    {
      title: "Өөрийгөө тодорхойлох",
      description:
        "Манай асуулгыг бөглөөд өөрийгөө ямар төрлийн арилжаачин бэ гэдгээ тодорхойлоорой",
      buttonLabel: "Тест бөглөх",
      icon: "🧩",
    },
    {
      title: "Суралцах",
      description:
        "Танд тохирсон арилжааны аргачлалд зориулсан хичээлүүдийг үзэж зах зээлд оролцох бэлтгэлээ хангаарай",
      buttonLabel: "Хичээл үзэх",
      icon: "📚",
    },
    {
      title: "Практикт суралцах",
      description:
        "Үзсэн мэдлэгээ бататгаж зах зээлийн хөдөлгөөн дээр back-test front-test хийж гартаа оруулаарай",
      buttonLabel: "Арилжаа хийх",
      icon: "💡",
    },
    {
      title: "Ашигтай арилжаачин",
      description:
        "Арилжаанд оролцон эрсдлийн менежменттэй, ашигтай арилжаачин болох нь зөвхөн танаас л шалтгаална",
      buttonLabel: "Үр дүн",
      icon: "🏆",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <section className="bg-gray-900 overflow-hidden">
      <div className="py-8">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-12">
          Амжилттай Арилжаачны Замнал
        </h2>
        <div className="relative w-full overflow-hidden p-4">
            {/* <div className="bg-glass rounded-md absolute top-0 left-[39%] px-[166px] py-[500px]" /> */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${
                activeStep * 332 + 166
              }px))`,
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 flex flex-col items-center text-center transition-opacity duration-500 ease-in-out w-[300px] cursor-pointer mx-4 ${
                  index === activeStep ? "opacity-100" : ( index - 1 === activeStep) ? "opacity-50" : "opacity-20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    index === activeStep ? "bg-green-500" : "bg-green-400"
                  } text-white text-2xl mb-2`}
                  aria-label={step.title}
                >
                  {step.icon}
                </div>
                <h3
                  className={`text-green-400 text-lg font-semibold mb-2 ${
                    index === activeStep ? "font-bold" : ""
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-white mb-4">{step.description}</p>
                <a
                  href="#"
                  className={`px-6 py-2 bg-green-400 text-white rounded-lg transition duration-300 hover:bg-green-500" ${index === activeStep ? "opacity-100" : "opacity-0"}`}
                >
                  {step.buttonLabel}
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-600 opacity-50 text-white rounded-lg transition duration-300 hover:bg-green-500 absolute left-1 top-[40%]"
            disabled={activeStep === 0}
          >
            {`<`}
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-600 opacity-50 text-white rounded-lg transition duration-300 hover:bg-green-500 absolute right-1 top-[40%]"
            disabled={activeStep === steps.length - 1}
          >
            {`>`}
          </button>
        </div>
        <div className="flex justify-between relative h-full">
          
        </div>
      </div>
    </section>
  );
};

export default StepsSection;