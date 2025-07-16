import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe } from 'lucide-react';

const DonationCTA = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Make a Difference Today
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Your donation helps us continue our mission to create positive change in communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Direct Impact</h3>
            <p className="text-emerald-100">100% of your donation goes directly to programs</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
            <p className="text-emerald-100">Join thousands of supporters worldwide</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
            <p className="text-emerald-100">Supporting communities in over 50 countries</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
          >
            Donate Now
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg border-2 border-emerald-700"
          >
            View Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;