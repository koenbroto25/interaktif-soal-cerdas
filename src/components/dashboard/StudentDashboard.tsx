
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, BarChart3, Settings, PlayCircle, Clock, Award, Target } from 'lucide-react';

interface StudentDashboardProps {
  profile: any;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ profile }) => {
  const studentCards = [
    {
      title: 'Kelas Saya',
      description: 'Akses kelas yang Anda ikuti dan materi pembelajaran',
      icon: Users,
      href: '/student/classes',
      color: 'bg-blue-500'
    },
    {
      title: 'Worksheet Tersedia',
      description: 'Kerjakan worksheet dan tugas yang diberikan guru',
      icon: BookOpen,
      href: '/student/worksheets',
      color: 'bg-green-500'
    },
    {
      title: 'Nilai & Progres',
      description: 'Lihat nilai dan perkembangan belajar Anda',
      icon: BarChart3,
      href: '/student/grades',
      color: 'bg-purple-500'
    },
    {
      title: 'Pengaturan',
      description: 'Kelola profil dan preferensi belajar',
      icon: Settings,
      href: '/student/settings',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Selamat Datang, Siswa!</h2>
        <p className="text-purple-100">
          Mari belajar dengan mengerjakan worksheet dan mengikuti kelas
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-16 text-left justify-start bg-primary hover:bg-primary/90">
          <PlayCircle className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Mulai Belajar</div>
            <div className="text-sm opacity-90">Worksheet yang belum selesai</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 text-left justify-start">
          <Users className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Gabung Kelas</div>
            <div className="text-sm text-gray-600">Masukkan kode kelas</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 text-left justify-start">
          <Award className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Lihat Nilai</div>
            <div className="text-sm text-gray-600">Progres pembelajaran</div>
          </div>
        </Button>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studentCards.map((card, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${card.color} text-white`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                {card.description}
              </CardDescription>
              <Button 
                className="w-full" 
                onClick={() => window.location.href = card.href}
              >
                Akses
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Student Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tugas Mendatang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <div className="font-semibold">Kuis Matematika</div>
                    <div className="text-sm text-gray-600">Deadline: 2 hari lagi</div>
                  </div>
                </div>
                <Button size="sm">Kerjakan</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold">Latihan Fisika</div>
                    <div className="text-sm text-gray-600">Deadline: Hari ini</div>
                  </div>
                </div>
                <Button size="sm" variant="destructive">Urgent</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progres Belajar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Matematika</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Fisika</span>
                  <span>72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Kimia</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
