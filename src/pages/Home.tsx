import React from 'react';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import TestimonialCard from '../components/TestimonialCard';
import DonationCTA from '../components/DonationCTA';
import { Users, Heart, Globe, Award } from 'lucide-react';

const Home = () => {
  // Mock data - in production, this would come from Sanity
  const heroData = {
    title: "Creating Hope, Changing Lives",
    subtitle: "Together, we're building stronger communities and brighter futures for families in need.",
    backgroundImage: "/images/hero.jpg",
    ctaText: "Join Our Mission",
    ctaLink: "/programs"
  };

  const programs = [
    {
      id: 1,
      title: "Education for All",
      description: "Providing quality education and learning resources to underserved communities.",
      image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
      category: "Education",
      impact: "500+ Children Educated"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Installing water systems and teaching communities about water conservation.",
      image: "https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg",
      category: "Water",
      impact: "50+ Wells Built"
    },
    {
      id: 3,
      title: "Healthcare Outreach",
      description: "Mobile clinics and healthcare education in rural and urban communities.",
      image: "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg",
      category: "Healthcare",
      impact: "10,000+ Lives Touched"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Program Beneficiary",
      content: "Thanks to HopeFoundation's education program, my daughter now has access to quality schooling and a bright future.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      role: "Healthcare Volunteer",
      content: "Working with HopeFoundation has been incredibly rewarding. The impact we make together is truly life-changing.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Monthly Donor",
      content: "I'm proud to support an organization that uses donations so effectively and transparently.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Lives Impacted" },
    { icon: Heart, value: "1,200+", label: "Volunteers" },
    { icon: Globe, value: "25", label: "Countries" },
    { icon: Award, value: "15", label: "Years of Service" }
  ];

  return (
    <div>
      <Hero {...heroData} />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work across multiple sectors to create lasting change in communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from those whose lives have been touched by our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <DonationCTA />
    </div>
  );
};

export default Home;