import Container from "./container";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Thanks to Robinhood Club, I was able to improve my trading skills tremendously!",
      author: "John D.",
    },
    {
      quote:
        "The resources and community support have been invaluable to my trading journey.",
      author: "Sarah L.",
    },
    {
      quote:
        "I love the Lot Pip Calculator; it has helped me make better trading decisions.",
      author: "Michael S.",
    },
  ];

  return (
    <section className="py-12 sm:py-8 mb-4 bg-[#1A2438]">
      <Container>
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {testimonials.map((testimonial, key) => (
              <div
                key={key}
                className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in"
              >
                <p className="mb-4">{`"${testimonial.quote}"`}</p>
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
