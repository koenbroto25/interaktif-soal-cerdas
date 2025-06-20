
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const ReadyToStart = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready To Get Started?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join millions of students and teachers who are already using our interactive worksheets to make learning more engaging and effective.
        </p>
        
        <Link to="/register">
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Create Your Free Account
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReadyToStart;
