import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-emerald-900 to-emerald-700">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ctaLink}
            className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg group"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;