
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BookOpen, 
  User, 
  LogIn, 
  Menu, 
  X,
  GraduationCap,
  Users,
  UserCheck,
  LogOut,
  Settings
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getDashboardRoute = (role: string) => {
    switch (role) {
      case 'admin': return '/admin';
      case 'teacher': return '/teacher';
      case 'student': return '/student';
      default: return '/';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin': return t('dashboard.role.admin');
      case 'teacher': return t('dashboard.role.teacher');
      case 'student': return t('dashboard.role.student');
      default: return role;
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">
              EduWorksheet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <Home className="h-4 w-4" />
              <span>{t('nav.home')}</span>
            </Link>
            <Link 
              to="/students" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <Users className="h-4 w-4" />
              <span>{t('nav.students')}</span>
            </Link>
            <Link 
              to="/teachers" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <UserCheck className="h-4 w-4" />
              <span>{t('nav.teachers')}</span>
            </Link>
            <Link 
              to="/worksheets" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <BookOpen className="h-4 w-4" />
              <span>{t('nav.worksheets')}</span>
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              {t('nav.about')}
            </Link>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            {user && profile ? (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {profile.full_name || profile.email}
                  </p>
                  <p className="text-xs text-gray-600">
                    {getRoleLabel(profile.role)}
                  </p>
                </div>
                <Link to={getDashboardRoute(profile.role)}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    {t('nav.dashboard')}
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut}
                  className="border-red-300 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {t('nav.logout')}
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <LogIn className="h-4 w-4 mr-2" />
                    {t('nav.login')}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-primary hover:bg-primary-600 text-white">
                    <User className="h-4 w-4 mr-2" />
                    {t('nav.register')}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>{t('nav.home')}</span>
              </Link>
              <Link
                to="/students"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>{t('nav.students')}</span>
              </Link>
              <Link
                to="/teachers"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserCheck className="h-4 w-4" />
                <span>{t('nav.teachers')}</span>
              </Link>
              <Link
                to="/worksheets"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>{t('nav.worksheets')}</span>
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {user && profile ? (
                  <>
                    <div className="px-3 py-2 text-sm">
                      <p className="font-medium text-gray-900">
                        {profile.full_name || profile.email}
                      </p>
                      <p className="text-xs text-gray-600">
                        {getRoleLabel(profile.role)}
                      </p>
                    </div>
                    <Link to={getDashboardRoute(profile.role)} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Settings className="h-4 w-4 mr-2" />
                        {t('nav.dashboard')}
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full border-red-300 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      {t('nav.logout')}
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        <LogIn className="h-4 w-4 mr-2" />
                        {t('nav.login')}
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                        <User className="h-4 w-4 mr-2" />
                        {t('nav.register')}
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
