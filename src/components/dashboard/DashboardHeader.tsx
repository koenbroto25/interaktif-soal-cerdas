
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, LogOut } from 'lucide-react';

interface DashboardHeaderProps {
  profile: any;
  onSignOut: () => Promise<void>;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ profile, onSignOut }) => {
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

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="bg-primary p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EduWorksheet</h1>
              <p className="text-sm text-gray-600">Selamat datang, {profile.full_name || profile.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(profile.role)}`}>
              {getRoleLabel(profile.role)}
            </div>
            <Button 
              variant="outline" 
              onClick={onSignOut}
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Keluar</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
