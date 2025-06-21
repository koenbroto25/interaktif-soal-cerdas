
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';

const TeacherPage = () => {
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

  if (profile.role !== 'teacher') {
    return <Navigate to="/login" replace />;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader profile={profile} onSignOut={handleSignOut} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TeacherDashboard profile={profile} />
      </div>
    </div>
  );
};

export default TeacherPage;
