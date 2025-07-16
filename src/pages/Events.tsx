import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Fundraising Gala",
      description: "Join us for an evening of celebration and fundraising to support our programs.",
      date: "2025-12-15",
      location: "Grand Ballroom, Downtown Hotel",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      category: "Fundraising"
    },
    {
      id: 2,
      title: "Community Food Fair",
      description: "Free Food  distribution and wellness workshops for the entire community.",
      date: "2025-07-27",
      location: "Community Center",
      image: "/images/hero.jpg",
      category: "Food"
    },
    {
      id: 3,
      title: "Youth Mentorship Workshop",
      description: "Skills development and mentorship opportunities for young people.",
      date: "2025-09-3",
      location: "Youth Center",
      image: "https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg",
      category: "Youth"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Water Well Dedication",
      description: "Celebrated the completion of our 50th water well in rural communities.",
      date: "2024-03-15",
      location: "Rural Village",
      image: "https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg",
      category: "Water"
    },
    {
      id: 5,
      title: "Education Summit",
      description: "Bringing together educators and community leaders to discuss educational initiatives.",
      date: "2024-02-10",
      location: "Conference Center",
      image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
      category: "Education"
    },
    {
      id: 6,
      title: "Volunteer Appreciation Day",
      description: "Celebrating our amazing volunteers and their contributions to our mission.",
      date: "2024-01-20",
      location: "HopeFoundation Headquarters",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      category: "Community"
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Events</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Join us for events that bring our community together and advance our mission.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Tabs */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'upcoming'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'past'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Event Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our events bring communities together and raise crucial support for our programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Events Held</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">Participants</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive updates about upcoming events and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;