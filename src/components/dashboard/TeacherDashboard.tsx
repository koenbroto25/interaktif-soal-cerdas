
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, BarChart3, Settings, PlusCircle, Calendar, CheckCircle } from 'lucide-react';

interface TeacherDashboardProps {
  profile: any;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ profile }) => {
  const teacherCards = [
    {
      title: 'Kelola Kelas',
      description: 'Buat kelas baru dan kelola siswa di kelas Anda',
      icon: Users,
      href: '/teacher/classes',
      color: 'bg-blue-500'
    },
    {
      title: 'Worksheet Saya',
      description: 'Buat, edit, dan kelola worksheet untuk siswa',
      icon: BookOpen,
      href: '/teacher/worksheets',
      color: 'bg-green-500'
    },
    {
      title: 'Hasil Siswa',
      description: 'Lihat dan nilai hasil pengerjaan siswa',
      icon: BarChart3,
      href: '/teacher/results',
      color: 'bg-purple-500'
    },
    {
      title: 'Pengaturan',
      description: 'Kelola profil dan preferensi mengajar',
      icon: Settings,
      href: '/teacher/settings',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Selamat Datang, Guru!</h2>
        <p className="text-green-100">
          Kelola kelas dan worksheet Anda dengan mudah di dashboard ini
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-16 text-left justify-start bg-primary hover:bg-primary/90">
          <Users className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Buat Kelas Baru</div>
            <div className="text-sm opacity-90">Mulai kelas dan undang siswa</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 text-left justify-start">
          <PlusCircle className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Buat Worksheet</div>
            <div className="text-sm text-gray-600">Worksheet baru untuk siswa</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 text-left justify-start">
          <CheckCircle className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Periksa Hasil</div>
            <div className="text-sm text-gray-600">Nilai tugas yang masuk</div>
          </div>
        </Button>
      </div>

      {/* Teacher Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teacherCards.map((card, index) => (
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
                Kelola
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Teacher Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Kelas Saya</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-semibold">Matematika Kelas 7A</div>
                  <div className="text-sm text-gray-600">25 siswa</div>
                </div>
                <div className="text-blue-600 font-bold">AKTIF</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-semibold">Fisika Kelas 8B</div>
                  <div className="text-sm text-gray-600">28 siswa</div>
                </div>
                <div className="text-green-600 font-bold">AKTIF</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Worksheet Aljabar</div>
                  <div className="text-sm text-gray-600">15 siswa telah mengerjakan</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-semibold">Kuis Gerak Lurus</div>
                  <div className="text-sm text-gray-600">Perlu dinilai: 8 siswa</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
