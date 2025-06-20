
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, MessageCircle, Search } from 'lucide-react';

const GettingStarted = () => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Get Started Guide',
      description: 'Learn the basics of how to use our interactive worksheets and get the most out of your learning experience.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Play,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video tutorials that will help you navigate through different types of exercises and activities.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Ask The Community',
      description: 'Join our vibrant community of learners and teachers. Ask questions, share tips, and get help from peers.',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Getting Started Is Easy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            If you're looking for help getting started, don't hesitate to reach out to us for assistance! Whether you're looking for a learning partner or just want to explore our resources.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Find topics..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <step.icon className={`h-10 w-10 ${step.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {step.description}
              </p>
              
              <Link to="/register">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
