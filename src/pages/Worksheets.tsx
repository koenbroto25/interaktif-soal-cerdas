
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, BookOpen, Clock, Users, Star } from 'lucide-react';

const Worksheets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const worksheets = [
    {
      id: 1,
      title: 'Matematika Dasar - Penjumlahan',
      subject: 'Matematika',
      grade: 'Kelas 1-2',
      duration: '30 menit',
      users: 1250,
      rating: 4.8,
      description: 'Worksheet interaktif untuk belajar penjumlahan dasar dengan cara yang menyenangkan.',
      image: '🔢'
    },
    {
      id: 2,
      title: 'Bahasa Indonesia - Membaca Pemahaman',
      subject: 'Bahasa Indonesia',
      grade: 'Kelas 3-4',
      duration: '45 menit',
      users: 980,
      rating: 4.7,
      description: 'Latihan membaca dan memahami teks sederhana untuk meningkatkan kemampuan literasi.',
      image: '📚'
    },
    {
      id: 3,
      title: 'IPA - Sistem Tata Surya',
      subject: 'IPA',
      grade: 'Kelas 5-6',
      duration: '60 menit',
      users: 750,
      rating: 4.9,
      description: 'Eksplorasi sistem tata surya dengan aktivitas interaktif dan visual menarik.',
      image: '🌍'
    },
    {
      id: 4,
      title: 'Bahasa Inggris - Basic Vocabulary',
      subject: 'Bahasa Inggris',
      grade: 'Kelas 1-3',
      duration: '25 menit',
      users: 1100,
      rating: 4.6,
      description: 'Pengenalan kosakata dasar bahasa Inggris dengan gambar dan audio.',
      image: '🗣️'
    },
    {
      id: 5,
      title: 'Matematika - Geometri Bangun Datar',
      subject: 'Matematika',
      grade: 'Kelas 4-5',
      duration: '40 menit',
      users: 650,
      rating: 4.5,
      description: 'Mengenal berbagai bangun datar dan sifat-sifatnya melalui aktivitas praktis.',
      image: '📐'
    },
    {
      id: 6,
      title: 'IPS - Keragaman Budaya Indonesia',
      subject: 'IPS',
      grade: 'Kelas 4-6',
      duration: '50 menit',
      users: 820,
      rating: 4.8,
      description: 'Menjelajahi kekayaan budaya Indonesia dari Sabang sampai Merauke.',
      image: '🏛️'
    }
  ];

  const subjects = ['Semua', 'Matematika', 'Bahasa Indonesia', 'IPA', 'Bahasa Inggris', 'IPS'];
  const [selectedSubject, setSelectedSubject] = useState('Semua');

  const filteredWorksheets = worksheets.filter(worksheet => {
    const matchesSearch = worksheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worksheet.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'Semua' || worksheet.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Koleksi Worksheet Interaktif
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Temukan ribuan worksheet berkualitas tinggi untuk semua mata pelajaran dan tingkat kelas
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Cari worksheet berdasarkan judul atau mata pelajaran..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Filter Mata Pelajaran</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span>{filteredWorksheets.length} worksheet ditemukan</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <Button
                key={subject}
                variant={selectedSubject === subject ? "default" : "outline"}
                onClick={() => setSelectedSubject(subject)}
                className="rounded-full px-6 py-2"
              >
                {subject}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Worksheets Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorksheets.map((worksheet) => (
              <Card key={worksheet.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{worksheet.image}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{worksheet.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{worksheet.title}</CardTitle>
                  <CardDescription>{worksheet.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{worksheet.subject}</span>
                      </div>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                        {worksheet.grade}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{worksheet.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{worksheet.users.toLocaleString()} pengguna</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-primary hover:bg-primary-600">
                      Mulai Worksheet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Worksheets;
