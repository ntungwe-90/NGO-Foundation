import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Victorine's Seed of Care Foundation</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering communities and changing lives through compassionate action and sustainable programs.
              Together, we build a brighter future for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+233 502931502</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@Victorine's Seed of Care Foundation.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                <span className="text-gray-300">123 Hope Street<br />Community City, CC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Our Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Stay updated with our latest news and events.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              />
              <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Victorine's Seed of Care Foundation. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;