import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imagePlaceholder: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imagePlaceholder }) => {
  return (
    <div className="bg-glass backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in">
      <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
        <span className="text-gray-400">{imagePlaceholder}</span>
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;