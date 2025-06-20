
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Target, 
  Heart,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      description: 'Pendidik berpengalaman 15+ tahun dengan passion untuk teknologi pendidikan.',
      image: '👩‍🏫'
    },
    {
      name: 'Ahmad Rizki',
      role: 'Head of Technology',
      description: 'Expert dalam pengembangan platform edukasi dan AI untuk pembelajaran.',
      image: '👨‍💻'
    },
    {
      name: 'Maya Sari',
      role: 'Education Director',
      description: 'Spesialis kurikulum dengan fokus pada metode pembelajaran inovatif.',
      image: '👩‍🎓'
    },
    {
      name: 'David Chen',
      role: 'UX Designer',
      description: 'Desainer berpengalaman dalam menciptakan antarmuka yang user-friendly.',
      image: '👨‍🎨'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Inovasi',
      description: 'Selalu menghadirkan solusi terdepan dalam teknologi pendidikan'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Kepedulian',
      description: 'Mengutamakan kebutuhan siswa dan guru dalam setiap fitur yang kami kembangkan'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Kualitas',
      description: 'Komitmen terhadap standar tinggi dalam konten dan pengalaman pengguna'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tentang EduWorksheet
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Platform edukasi digital terdepan yang menghubungkan guru dan siswa melalui 
            worksheet interaktif dan teknologi pembelajaran inovatif
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Misi Kami</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menciptakan ekosistem pembelajaran digital yang memungkinkan setiap siswa 
                  untuk belajar dengan cara yang paling sesuai dengan gaya belajar mereka, 
                  sambil memberikan guru alat-alat canggih untuk mengajar lebih efektif.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Visi Kami</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menjadi platform pendidikan digital terdepan di Indonesia yang 
                  mentransformasi cara belajar dan mengajar melalui teknologi inovatif, 
                  sehingga setiap anak dapat meraih potensi terbaiknya.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dampak Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <p className="text-gray-600">Siswa Aktif</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <p className="text-gray-600">Guru Bergabung</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <p className="text-gray-600">Worksheet Tersedia</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tim Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-gray-600">
              Punya pertanyaan atau ingin berkolaborasi? Kami siap membantu!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@eduworksheet.com</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telepon</h3>
              <p className="text-gray-600">+62 21 1234 5678</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alamat</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary-600 px-8 py-4">
              Kirim Pesan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
