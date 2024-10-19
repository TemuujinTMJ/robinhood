import Container from "./container";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Би Robinhood.mn-ийг бүх түвшний арилжаачдад зориулж үүсгэн байгуулсан. Арилжааны дэвшилтэт хэрэгслүүд, live сигнал болон e-HUB маань нийт арилжаачдад таалагдана гэдэгт итгэлтэй байна.",
      author: "- Batluu Trader / Robinhood.mn-ийн тэргүүн /",
    },
    {
      quote:
        "Robinhood.mn-с заадаг эрсдлийн менежментийн аргазүй арилжааг өөр өнцгөөс харуулж чаддаг юм байна лээ. Арилжаа хийх сонирхолтой залуус энд цугларах нь цаг хугацааны л асуудал!",
      author: "- Ochiroo Trader / otheory /",
    },
    {
      quote:
        "Robinhood.mn-н e-HUB төсөл нь арилжааны боловсролыг шинэлэг өнцгөөс түгээж, арилжаачдад хамтдаа хөгжих шинэ орон зайг бий болгох гэж байна. Энэхүү гайхалтай төсөлд оролцож байгаадаа маш их баяртай байна.",
      author: "- Etseg Trader / Etseg Trader Academy /",
    },
  ];

  return (
    <section className="py-12 sm:py-8 mb-4 bg-[#1A2438]">
      <Container>
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Арилжаачдын Сэтгэгдэл
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {testimonials.map((testimonial, key) => (
              <div
                key={key}
                className="bg-glass backdrop-blur-md p-7 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in flex flex-col justify-between"
              >
                <p className="mb-4 text-sm italic">{`"${testimonial.quote}"`}</p>
                <p className="font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
