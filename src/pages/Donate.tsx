import React, { useState } from 'react';
import { Heart, Shield, Award, CreditCard, Users, Globe } from 'lucide-react';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setDonationAmount(amount.toString());
  };

  const handleCustomAmount = (value: string) => {
    setDonationAmount(value);
    setSelectedAmount(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Make a Donation</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Your generosity helps us continue our mission to create positive change in communities worldwide.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Donation</h2>

            {/* Donation Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${donationType === 'one-time'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${donationType === 'monthly'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-3 rounded-lg border text-center font-medium transition-colors ${selectedAmount === amount
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-300'
                      }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="custom-amount"
                    value={donationAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* Impact Display */}
            {donationAmount && (
              <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Your Impact</h3>
                <p className="text-emerald-700">
                  ${donationAmount} can provide clean water for 5 families for a month or school supplies for 10 children.
                </p>
              </div>
            )}

            {/* Billing Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button className="p-3 border border-gray-300 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                  <div className="text-center">
                    <CreditCard className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                    <span className="text-xs text-gray-600">Credit Card</span>
                  </div>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                  <div className="text-center">
                    <div className="h-6 w-6 mx-auto mb-1 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">P</div>
                    <span className="text-xs text-gray-600">PayPal</span>
                  </div>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                  <div className="text-center">
                    <div className="h-6 w-6 mx-auto mb-1 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                    <span className="text-xs text-gray-600">Venmo</span>
                  </div>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                  <div className="text-center">
                    <div className="h-6 w-6 mx-auto mb-1 bg-purple-700 rounded text-white text-xs flex items-center justify-center font-bold">Z</div>
                    <span className="text-xs text-gray-600">Zelle</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Donation Button */}
            <button
              disabled={!donationAmount}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Donate ${donationAmount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure donation processing with multiple payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Donation Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every dollar you donate goes directly to programs that create lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Impact</h3>
              <p className="text-gray-600">100% of your donation goes directly to our programs and the communities we serve.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Transparent</h3>
              <p className="text-gray-600">We maintain the highest standards of financial transparency and security.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Our programs have a track record of creating sustainable, positive change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Help</h2>
            <p className="text-xl text-gray-600">
              There are many ways to support our mission beyond monetary donations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers and contribute your time and skills to our programs.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Help us reach more people by sharing our mission on social media and in your community.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Share Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;