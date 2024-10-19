"use client";
import { useEffect, useRef } from "react";

const Partners = () => {
  const cards = [
    { title: "Partner 1" },
    { title: "Partner 2" },
    { title: "Partner 3" },
    { title: "Partner 4" },
    { title: "Partner 5" },
    { title: "Partner 6" },
    { title: "Partner 7" },
    { title: "Partner 8" },
    { title: "Partner 9" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const scrollAmount = 300; // Amount of pixels to scroll each time
      const intervalTime = 2000; // Time interval between each scroll (ms)

      const interval = setInterval(() => {
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        // Loop back to the start
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, intervalTime);

      return () => clearInterval(interval); // Clean up on component unmount
    }
  }, []);

  return (
    <section className="bg-[#1A2438] py-12">
      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto gap-4 scrollbar-hide"
      >
        {cards.map((card, key) => (
          <div
            key={key}
            className="bg-[#2B364C] h-36 min-w-[300px] text-center p-6 rounded-lg flex flex-col justify-center"
          >
            <p className="text-gray-400">{card.title} Logo</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
