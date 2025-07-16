import React, { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import { Filter } from 'lucide-react';

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const programs = [
    {
      id: 1,
      title: "Education for All",
      description: "Providing quality education and learning resources to underserved communities worldwide.",
      image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
      category: "Education",
      impact: "500+ Children Educated"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Installing water systems and teaching communities about water conservation and hygiene.",
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
    },
    {
      id: 4,
      title: "Women's Empowerment",
      description: "Supporting women through skills training, microfinance, and leadership development.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      category: "Empowerment",
      impact: "300+ Women Supported"
    },
    {
      id: 5,
      title: "Food Security Program",
      description: "Addressing hunger through sustainable agriculture and nutrition education.",
      image: "/images/imdadul-hussain-YiA4wqVpLQQ-unsplash.jpg",
      category: "Food",
      impact: "2,000+ Families Fed"
    },
    {
      id: 6,
      title: "Youth Development",
      description: "Mentoring and skills training programs for young people in underserved communities.",
      image: "https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg",
      category: "Youth",
      impact: "800+ Youth Mentored"
    }
  ];

  const categories = ['all', 'Education', 'Healthcare', 'Water', 'Empowerment', 'Food', 'Youth'];

  const filteredPrograms = activeFilter === 'all'
    ? programs
    : programs.filter(program => program.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how we're making a difference through comprehensive programs designed to create lasting change.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-lg font-medium text-gray-900">Filter by Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category === 'all' ? 'All Programs' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our programs create measurable, sustainable change in communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Program Success Rate</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;