import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  impact: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, image, category, impact }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-600 font-medium">{impact}</span>
          <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group">
            Learn More
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;