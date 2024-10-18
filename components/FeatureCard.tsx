import Container from "./container";

const Features = () => {
  const cards = [
    {
      title: "Асуулга",
      description:
        "Хүн бүрийн сэтгэлзүйн онцлогт тохирсон хариуг 5 минутын дотор!",
    },
    {
      title: "Live сигнал",
      description:
        "10-н жилийн цор ганц арилжааны данс өсгөх газраас голлосон сигналууд",
    },
    {
      title: "Зах зээлийн шинжилгээ",
      description:
        "+90% магадлалтай зах зээлийн тойм шинжилгээг хамгийн түрүүнд",
    },
    {
      title: "eHub",
      description: "Монголын хамгийн анхны арилжаачдын цахим хаб",
      isHighlighted: true,
    },
  ];

  return (
    <section className="bg-[#1A2438] py-12">
      <Container>
        <h2 className="text-center text-white text-2xl font-bold mb-8">
          Бид танд
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, key) => (
            <div
              key={key}
              className={`bg-[#2B364C] text-center p-6 rounded-lg flex flex-col justify-between ${
                card.isHighlighted ? "border-2 border-blue-500" : ""
              }`}
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">{card.description}</p>
              <div className="h-40 bg-[#1A2438] rounded-md flex items-center justify-center">
                <p className="text-gray-400">Танилцуулга хичээл зураг орно</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
