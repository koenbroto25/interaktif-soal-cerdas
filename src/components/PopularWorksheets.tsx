
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Star } from 'lucide-react';

const PopularWorksheets = () => {
  const worksheets = [
    {
      title: 'Matematika Dasar',
      subject: 'Matematika',
      grade: 'Kelas 4-6',
      time: '30 menit',
      students: '1.2k',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
      difficulty: 'Mudah'
    },
    {
      title: 'Bahasa Inggris Conversation',
      subject: 'Bahasa Inggris',
      grade: 'Kelas 7-9',
      time: '45 menit',
      students: '856',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
      difficulty: 'Menengah'
    },
    {
      title: 'Sains Eksperimen',
      subject: 'IPA',
      grade: 'Kelas 5-8',
      time: '60 menit',
      students: '432',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop',
      difficulty: 'Menengah'
    },
    {
      title: 'Sejarah Indonesia',
      subject: 'Sejarah',
      grade: 'Kelas 10-12',
      time: '40 menit',
      students: '623',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      difficulty: 'Sulit'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Mudah': return 'bg-secondary text-white';
      case 'Menengah': return 'bg-warning text-white';
      case 'Sulit': return 'bg-destructive text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Jelajahi{' '}
            <span className="text-primary">
              Worksheet Populer
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ribuan worksheet interaktif siap pakai untuk berbagai mata pelajaran dan tingkat kelas.
          </p>
        </div>

        {/* Worksheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {worksheets.map((worksheet, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={worksheet.image} 
                  alt={worksheet.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(worksheet.difficulty)}`}>
                  {worksheet.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {worksheet.subject}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{worksheet.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {worksheet.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{worksheet.grade}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{worksheet.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{worksheet.students}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Mulai Worksheet
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
            Lihat Semua Worksheet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularWorksheets;
