
import React from 'react';
import AdminDashboard from './AdminDashboard';
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';

interface DashboardContentProps {
  profile: any;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ profile }) => {
  const renderDashboardContent = () => {
    switch (profile.role) {
      case 'admin':
        return <AdminDashboard profile={profile} />;
      case 'teacher':
        return <TeacherDashboard profile={profile} />;
      case 'student':
        return <StudentDashboard profile={profile} />;
      default:
        return <div>Role tidak dikenali</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {renderDashboardContent()}
    </div>
  );
};

export default DashboardContent;
