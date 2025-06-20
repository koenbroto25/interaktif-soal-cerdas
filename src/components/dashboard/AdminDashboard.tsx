
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, BarChart3, Settings, PlusCircle, FileText } from 'lucide-react';

interface AdminDashboardProps {
  profile: any;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ profile }) => {
  const adminCards = [
    {
      title: 'Kelola Pengguna',
      description: 'Kelola semua pengguna aplikasi (admin, guru, siswa)',
      icon: Users,
      href: '/admin/users',
      color: 'bg-blue-500'
    },
    {
      title: 'Kelola Worksheet',
      description: 'Buat dan kelola semua worksheet di sistem',
      icon: BookOpen,
      href: '/admin/worksheets',
      color: 'bg-green-500'
    },
    {
      title: 'Statistik Aplikasi',
      description: 'Lihat statistik penggunaan dan performa aplikasi',
      icon: BarChart3,
      href: '/admin/stats',
      color: 'bg-purple-500'
    },
    {
      title: 'Pengaturan Sistem',
      description: 'Konfigurasi dan pengaturan aplikasi',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Selamat Datang, Administrator!</h2>
        <p className="text-blue-100">
          Kelola seluruh sistem EduWorksheet dari dashboard admin ini
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="h-16 text-left justify-start bg-primary hover:bg-primary/90">
          <PlusCircle className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Tambah Pengguna Baru</div>
            <div className="text-sm opacity-90">Buat akun admin, guru, atau siswa</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 text-left justify-start">
          <FileText className="h-5 w-5 mr-3" />
          <div>
            <div className="font-semibold">Buat Worksheet Global</div>
            <div className="text-sm text-gray-600">Worksheet yang dapat diakses semua pengguna</div>
          </div>
        </Button>
      </div>

      {/* Admin Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminCards.map((card, index) => (
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

      {/* System Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Sistem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">150</div>
              <div className="text-sm text-gray-600">Total Pengguna</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">89</div>
              <div className="text-sm text-gray-600">Total Worksheet</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">45</div>
              <div className="text-sm text-gray-600">Kelas Aktif</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
