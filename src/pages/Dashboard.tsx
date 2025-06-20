
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, BarChart3, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, profile, signOut, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return <Navigate to="/login" replace />;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'text-red-600 bg-red-100';
      case 'teacher': return 'text-blue-600 bg-blue-100';
      case 'student': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrator';
      case 'teacher': return 'Guru';
      case 'student': return 'Siswa';
      default: return role;
    }
  };

  const getDashboardCards = () => {
    const baseCards = [
      {
        title: 'Profile',
        description: 'Kelola informasi akun Anda',
        icon: Settings,
        href: '/profile'
      }
    ];

    switch (profile.role) {
      case 'admin':
        return [
          {
            title: 'Kelola Pengguna',
            description: 'Kelola semua pengguna aplikasi',
            icon: Users,
            href: '/admin/users'
          },
          {
            title: 'Kelola Worksheet',
            description: 'Buat dan kelola semua worksheet',
            icon: BookOpen,
            href: '/admin/worksheets'
          },
          {
            title: 'Statistik',
            description: 'Lihat statistik penggunaan aplikasi',
            icon: BarChart3,
            href: '/admin/stats'
          },
          ...baseCards
        ];
      
      case 'teacher':
        return [
          {
            title: 'Kelola Kelas',
            description: 'Buat dan kelola kelas Anda',
            icon: Users,
            href: '/teacher/classes'
          },
          {
            title: 'Worksheet Saya',
            description: 'Buat dan kelola worksheet',
            icon: BookOpen,
            href: '/teacher/worksheets'
          },
          {
            title: 'Hasil Siswa',
            description: 'Lihat dan nilai hasil siswa',
            icon: BarChart3,
            href: '/teacher/results'
          },
          ...baseCards
        ];
      
      case 'student':
        return [
          {
            title: 'Kelas Saya',
            description: 'Akses kelas yang Anda ikuti',
            icon: Users,
            href: '/student/classes'
          },
          {
            title: 'Worksheet',
            description: 'Kerjakan worksheet yang tersedia',
            icon: BookOpen,
            href: '/student/worksheets'
          },
          {
            title: 'Nilai Saya',
            description: 'Lihat hasil dan nilai Anda',
            icon: BarChart3,
            href: '/student/grades'
          },
          ...baseCards
        ];
      
      default:
        return baseCards;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Selamat datang, {profile.full_name || profile.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(profile.role)}`}>
                {getRoleLabel(profile.role)}
              </div>
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Keluar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dashboard {getRoleLabel(profile.role)}
          </h2>
          <p className="text-gray-600">
            Kelola aktivitas Anda di EduWorksheet
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDashboardCards().map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {card.description}
                </CardDescription>
                <Button 
                  className="mt-4 w-full" 
                  variant="outline"
                  onClick={() => window.location.href = card.href}
                >
                  Buka
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* User Info Card */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Informasi Akun</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-900">{profile.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Nama Lengkap</label>
                <p className="text-gray-900">{profile.full_name || 'Belum diatur'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Role</label>
                <p className="text-gray-900">{getRoleLabel(profile.role)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Bergabung</label>
                <p className="text-gray-900">
                  {new Date(profile.created_at).toLocaleDateString('id-ID')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
