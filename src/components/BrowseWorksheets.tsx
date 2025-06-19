
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Download, Star } from 'lucide-react';

const BrowseWorksheets = () => {
  const worksheets = [
    {
      title: 'Rearrange the Jumbled Words',
      subject: 'English',
      level: 'Grade 4',
      views: '4.5k',
      downloads: '2.1k',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop'
    },
    {
      title: 'Prime and Composite Numbers',
      subject: 'Math',
      level: 'Grade 5',
      views: '3.2k',
      downloads: '1.8k',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop'
    },
    {
      title: 'Simple Past Tense Practice',
      subject: 'English',
      level: 'Grade 6',
      views: '5.1k',
      downloads: '2.9k',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop'
    },
    {
      title: 'Plant Lifecycle',
      subject: 'Science',
      level: 'Grade 3',
      views: '2.8k',
      downloads: '1.5k',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop'
    },
    {
      title: 'Food Combinations',
      subject: 'Health',
      level: 'Grade 2',
      views: '1.9k',
      downloads: '1.2k',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=300&h=200&fit=crop'
    },
    {
      title: 'Sentence and Punctuation',
      subject: 'English',
      level: 'Grade 4',
      views: '3.7k',
      downloads: '2.3k',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop'
    },
    {
      title: 'Present Perfect Tense',
      subject: 'English',
      level: 'Grade 8',
      views: '4.3k',
      downloads: '2.7k',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop'
    },
    {
      title: 'Present Continuous',
      subject: 'English',
      level: 'Grade 7',
      views: '3.5k',
      downloads: '2.1k',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Browse Popular Worksheets
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Online learning worksheets used by millions of students around the world! 
            ESL worksheets, phonics, reading worksheets, grammar and math worksheets.
          </p>
        </div>

        {/* Worksheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {worksheets.map((worksheet, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={worksheet.image} 
                  alt={worksheet.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {worksheet.subject}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">{worksheet.rating}</span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {worksheet.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3">{worksheet.level}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{worksheet.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>{worksheet.downloads}</span>
                  </div>
                </div>

                <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-white text-xs">
                  View Worksheet
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            View More Worksheets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrowseWorksheets;
