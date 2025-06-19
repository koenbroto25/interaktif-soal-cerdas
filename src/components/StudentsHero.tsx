
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Play } from 'lucide-react';

const StudentsHero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Interactive Worksheets
                <br />
                <span className="text-primary">For all Languages and</span>
                <br />
                <span className="text-secondary">Subjects</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Learning is easy and fun with interactive worksheets and 
                workbooks! We have millions of worksheets available to get 
                started today for free!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning With A Free Account
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative">
              {/* Main circular background */}
              <div className="w-80 h-80 bg-red-500 rounded-full mx-auto relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&face"
                  alt="Student learning"
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
              
              <div className="absolute top-16 -left-8 w-12 h-12 text-blue-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsHero;
