import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in">
      <p className="mb-4">{`"${quote}"`}</p>
      <p className="font-bold">- {author}</p>
    </div>
  );
};

export default TestimonialCard;