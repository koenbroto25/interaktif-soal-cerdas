
import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '2+ Juta',
      label: 'Siswa Aktif',
      description: 'Siswa dari berbagai negara menggunakan platform kami',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      number: '5+ Juta',
      label: 'Worksheet',
      description: 'Worksheet interaktif tersedia dalam berbagai mata pelajaran',
      color: 'text-secondary'
    },
    {
      icon: Award,
      number: '6+ Juta',
      label: 'Latihan Selesai',
      description: 'Latihan yang telah dikerjakan siswa di seluruh dunia',
      color: 'text-accent'
    },
    {
      icon: Globe,
      number: '120+',
      label: 'Bahasa',
      description: 'Worksheet tersedia dalam berbagai bahasa dunia',
      color: 'text-success'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dipercaya oleh{' '}
            <span className="text-primary">
              Jutaan Pengguna
            </span>{' '}
            di Seluruh Dunia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform kami telah membantu jutaan siswa dan guru menciptakan pengalaman belajar yang lebih interaktif dan menyenangkan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
