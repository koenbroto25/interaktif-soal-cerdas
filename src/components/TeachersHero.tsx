
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const TeachersHero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Create Interactive
                <br />
                <span className="text-primary">Worksheets For Teachers</span>
                <br />
                <span className="text-secondary">of all Languages and</span>
                <br />
                <span className="text-gray-900">Subjects</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Make your own interactive worksheets with our easy-to-use builder. Add 
                multimedia content, drag & drop activities, and automatic grading and 
                share them with your students in real time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Get started & create free account
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative">
              {/* Main image with decorative background */}
              <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto relative overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop"
                  alt="Teacher creating interactive worksheets"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 text-orange-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div className="absolute -top-2 right-8 w-6 h-6 text-purple-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div className="absolute bottom-4 -right-6 w-10 h-10 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersHero;
