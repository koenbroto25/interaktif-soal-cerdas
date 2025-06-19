
import React from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Zap, 
  Upload, 
  Target,
  BarChart3,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Worksheet Interaktif',
      description: 'Buat lembar kerja dengan berbagai jenis soal: pilihan ganda, isian, matching, dan banyak lagi.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Zap,
      title: 'Auto-Correcting',
      description: 'Sistem penilaian otomatis dengan feedback real-time untuk setiap jawaban siswa.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Upload,
      title: 'Upload PDF & Excel',
      description: 'Import file PDF atau Excel sebagai dasar worksheet, lalu tambahkan elemen interaktif.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Users,
      title: 'Multi-Role System',
      description: 'Dashboard khusus untuk admin, guru, dan siswa dengan fitur sesuai kebutuhan masing-masing.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: BarChart3,
      title: 'Analisis Hasil',
      description: 'Laporan detail progress siswa dengan visualisasi data yang mudah dipahami.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Target,
      title: 'Gamifikasi',
      description: 'Sistem poin, badge, dan ranking untuk membuat belajar lebih menyenangkan.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Shield,
      title: 'Keamanan Data',
      description: 'Perlindungan data dengan enkripsi tingkat enterprise menggunakan Supabase.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Award,
      title: 'Sertifikat Digital',
      description: 'Buat dan berikan sertifikat digital untuk siswa yang menyelesaikan worksheet.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Fitur-Fitur{' '}
            <span className="text-primary">
              Unggulan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform pembelajaran modern dengan teknologi terdepan untuk menciptakan pengalaman 
            edukasi yang interaktif dan menyenangkan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Siap Memulai Perjalanan Edukasi Digital?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Bergabunglah dengan ribuan guru dan siswa yang sudah merasakan kemudahan platform kami
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
              Coba Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
