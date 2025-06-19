
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Platform{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Edukasi
                </span>{' '}
                Interaktif untuk{' '}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Masa Depan
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Buat dan kerjakan lembar kerja interaktif secara online. Platform modern untuk guru dan siswa 
                dengan fitur auto-correcting, feedback real-time, dan pengalaman belajar yang menyenangkan.
              </p>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">Auto-Correcting</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-gray-700">Kolaboratif</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-gray-700">Gamifikasi</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Mulai Gratis Sekarang
                </Button>
              </Link>
              <Link to="/worksheets">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Jelajahi Worksheet
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-600">Worksheet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5000+</div>
                <div className="text-sm text-gray-600">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-gray-600">Guru</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="space-y-6">
                {/* Mock worksheet preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Matematika Kelas 8</h3>
                    <div className="bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-white text-xs font-medium">
                      Interaktif
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-2">Pertanyaan 1:</div>
                      <div className="text-gray-800">Hasil dari 2x + 5 = 15 adalah...</div>
                      <div className="flex space-x-2 mt-3">
                        <button className="bg-primary text-white px-3 py-1 rounded-md text-sm">A. 5</button>
                        <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">B. 10</button>
                        <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">C. 15</button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-2">Pertanyaan 2:</div>
                      <div className="text-gray-800">Volume kubus dengan sisi 4 cm adalah...</div>
                      <input 
                        type="text" 
                        placeholder="Masukkan jawaban..."
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-success to-primary text-white">
                    ✓ Submit Jawaban
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
