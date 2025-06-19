
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  UserCheck
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <span>Beranda</span>
            </Link>
            <Link 
              to="/students" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <Users className="h-4 w-4" />
              <span>Students</span>
            </Link>
            <Link 
              to="/teachers" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <UserCheck className="h-4 w-4" />
              <span>Teachers</span>
            </Link>
            <Link 
              to="/worksheets" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              <BookOpen className="h-4 w-4" />
              <span>Worksheet</span>
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Tentang
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <LogIn className="h-4 w-4 mr-2" />
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary-600 text-white">
                <User className="h-4 w-4 mr-2" />
                Daftar
              </Button>
            </Link>
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
                <span>Beranda</span>
              </Link>
              <Link
                to="/students"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>Students</span>
              </Link>
              <Link
                to="/teachers"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserCheck className="h-4 w-4" />
                <span>Teachers</span>
              </Link>
              <Link
                to="/worksheets"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Worksheet</span>
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <LogIn className="h-4 w-4 mr-2" />
                    Masuk
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                    <User className="h-4 w-4 mr-2" />
                    Daftar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
