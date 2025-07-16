import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, location, image, category }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{formatDate(date)}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <button 
          onClick={() => window.location.href = '/register'}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;