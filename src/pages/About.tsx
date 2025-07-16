import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every situation with empathy and understanding."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of working together to create change."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating measurable, sustainable change."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do."
    }
  ];

  const team = [
    {
      name: "Eng. Irene Ntungwe",
      role: "Executive Director",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
      bio: "With over 15 years in nonprofit leadership, Dr. Johnson brings passion and expertise to our mission."
    },
    {
      name: "Michael Rodriguez",
      role: "Program Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Michael oversees our global programs and ensures we deliver maximum impact in every community."
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      bio: "Sarah ensures our operations run smoothly and efficiently, maximizing donor impact."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Victorine's Seed of Care Foundation</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to creating positive change in communities worldwide,
            one life at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower communities and create lasting change through education, healthcare, and sustainable development programs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every person deserves access to basic necessities and opportunities to thrive.
                Through our comprehensive programs, we work alongside communities to build sustainable solutions.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Our Vision</h3>
                <p className="text-emerald-700">
                  A world where every community has the resources and support needed to build a better future for all.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                alt="Community members working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and how we work with communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate people behind our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Together, we've achieved remarkable results in communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education Programs</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 500+ children provided with quality education</li>
                <li>• 50+ schools built or renovated</li>
                <li>• 200+ teachers trained</li>
                <li>• 95% graduation rate in our programs</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Healthcare Initiatives</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 10,000+ people received medical care</li>
                <li>• 25+ mobile clinics deployed</li>
                <li>• 100+ healthcare workers trained</li>
                <li>• 80% reduction in preventable diseases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;