
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.students': 'Students',
    'nav.teachers': 'Teachers',
    'nav.worksheets': 'Worksheets',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.dashboard': 'Dashboard',
    'nav.logout': 'Logout',
    
    // Hero Section
    'hero.title.platform': 'Interactive',
    'hero.title.education': 'Education',
    'hero.title.platform2': 'Platform for the',
    'hero.title.future': 'Future',
    'hero.description': 'Create and work on interactive worksheets online. Modern platform for teachers and students with auto-correcting features, real-time feedback, and enjoyable learning experience.',
    'hero.cta.start': 'Start Free Now',
    'hero.cta.explore': 'Explore Worksheets',
    'hero.stats.worksheets': 'Worksheets',
    'hero.stats.students': 'Active Students',
    'hero.stats.teachers': 'Teachers',
    
    // Students Hero
    'students.hero.title': 'Interactive Worksheets',
    'students.hero.title2': 'For all Languages and',
    'students.hero.title3': 'Subjects',
    'students.hero.description': 'Learning is easy and fun with interactive worksheets and workbooks! We have millions of worksheets available to get started today for free!',
    'students.hero.cta': 'Start Learning With A Free Account',
    
    // Teachers Hero
    'teachers.hero.title': 'Create Interactive',
    'teachers.hero.title2': 'Worksheets For Teachers',
    'teachers.hero.title3': 'of all Languages and',
    'teachers.hero.title4': 'Subjects',
    'teachers.hero.description': 'Make your own interactive worksheets with our easy-to-use builder. Add multimedia content, drag & drop activities, and automatic grading and share them with your students in real time.',
    'teachers.hero.cta': 'Get started & create free account',
    
    // Ready to Start
    'ready.title': 'Ready To Get Started?',
    'ready.description': 'Join millions of students and teachers who are already using our interactive worksheets to make learning more engaging and effective.',
    'ready.cta': 'Create Your Free Account',
    
    // Getting Started
    'getting.title': 'Getting Started Is Easy',
    'getting.description': 'If you\'re looking for help getting started, don\'t hesitate to reach out to us for assistance! Whether you\'re looking for a learning partner or just want to explore our resources.',
    'getting.search': 'Find topics...',
    'getting.guide.title': 'Get Started Guide',
    'getting.guide.description': 'Learn the basics of how to use our interactive worksheets and get the most out of your learning experience.',
    'getting.video.title': 'Video Tutorials',
    'getting.video.description': 'Watch step-by-step video tutorials that will help you navigate through different types of exercises and activities.',
    'getting.community.title': 'Ask The Community',
    'getting.community.description': 'Join our vibrant community of learners and teachers. Ask questions, share tips, and get help from peers.',
    'getting.learn.more': 'Learn More',
    
    // Auth
    'auth.login.title': 'Sign In to Your Account',
    'auth.login.welcome': 'Welcome back! Please sign in to continue.',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.remember': 'Remember me',
    'auth.login.forgot': 'Forgot password?',
    'auth.login.signin': 'Sign In',
    'auth.login.no_account': 'Don\'t have an account?',
    'auth.login.signup_here': 'Sign up here',
    'auth.login.back_home': '← Back to Home',
    
    'auth.register.title': 'Create New Account',
    'auth.register.subtitle': 'Join thousands of EduWorksheet users',
    'auth.register.i_am': 'I am',
    'auth.register.student': 'Student',
    'auth.register.teacher': 'Teacher',
    'auth.register.admin': 'Admin',
    'auth.register.full_name': 'Full Name',
    'auth.register.enter_name': 'Enter full name',
    'auth.register.enter_email': 'name@email.com',
    'auth.register.create_password': 'Create password',
    'auth.register.confirm_password': 'Confirm Password',
    'auth.register.repeat_password': 'Repeat password',
    'auth.register.agree_terms': 'I agree to the',
    'auth.register.terms': 'Terms and Conditions',
    'auth.register.and': 'and',
    'auth.register.privacy': 'Privacy Policy',
    'auth.register.signup_now': 'Sign Up Now',
    'auth.register.have_account': 'Already have an account?',
    'auth.register.signin_here': 'Sign in here',
    
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.role.admin': 'Administrator',
    'dashboard.role.teacher': 'Teacher',
    'dashboard.role.student': 'Student',
    'dashboard.logout': 'Logout',
    
    // Language
    'language.english': 'English',
    'language.indonesian': 'Indonesian',
    
    // Common
    'common.loading': 'Loading...',
    'common.submit': 'Submit Answer',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.students': 'Siswa',
    'nav.teachers': 'Guru',
    'nav.worksheets': 'Worksheet',
    'nav.about': 'Tentang',
    'nav.login': 'Masuk',
    'nav.register': 'Daftar',
    'nav.dashboard': 'Dashboard',
    'nav.logout': 'Keluar',
    
    // Hero Section
    'hero.title.platform': 'Platform',
    'hero.title.education': 'Edukasi',
    'hero.title.platform2': 'Interaktif untuk',
    'hero.title.future': 'Masa Depan',
    'hero.description': 'Buat dan kerjakan lembar kerja interaktif secara online. Platform modern untuk guru dan siswa dengan fitur auto-correcting, feedback real-time, dan pengalaman belajar yang menyenangkan.',
    'hero.cta.start': 'Mulai Gratis Sekarang',
    'hero.cta.explore': 'Jelajahi Worksheet',
    'hero.stats.worksheets': 'Worksheet',
    'hero.stats.students': 'Siswa Aktif',
    'hero.stats.teachers': 'Guru',
    
    // Students Hero
    'students.hero.title': 'Worksheet Interaktif',
    'students.hero.title2': 'Untuk semua Bahasa dan',
    'students.hero.title3': 'Mata Pelajaran',
    'students.hero.description': 'Belajar menjadi mudah dan menyenangkan dengan worksheet dan workbook interaktif! Kami memiliki jutaan worksheet tersedia untuk memulai hari ini secara gratis!',
    'students.hero.cta': 'Mulai Belajar dengan Akun Gratis',
    
    // Teachers Hero
    'teachers.hero.title': 'Buat Worksheet',
    'teachers.hero.title2': 'Interaktif untuk Guru',
    'teachers.hero.title3': 'dari semua Bahasa dan',
    'teachers.hero.title4': 'Mata Pelajaran',
    'teachers.hero.description': 'Buat worksheet interaktif Anda sendiri dengan builder yang mudah digunakan. Tambahkan konten multimedia, aktivitas drag & drop, dan penilaian otomatis serta bagikan dengan siswa Anda secara real time.',
    'teachers.hero.cta': 'Mulai dan buat akun gratis',
    
    // Ready to Start
    'ready.title': 'Siap untuk Memulai?',
    'ready.description': 'Bergabunglah dengan jutaan siswa dan guru yang sudah menggunakan worksheet interaktif kami untuk membuat pembelajaran lebih menarik dan efektif.',
    'ready.cta': 'Buat Akun Gratis Anda',
    
    // Getting Started
    'getting.title': 'Memulai itu Mudah',
    'getting.description': 'Jika Anda mencari bantuan untuk memulai, jangan ragu untuk menghubungi kami! Baik Anda mencari partner belajar atau hanya ingin menjelajahi sumber daya kami.',
    'getting.search': 'Cari topik...',
    'getting.guide.title': 'Panduan Memulai',
    'getting.guide.description': 'Pelajari dasar-dasar cara menggunakan worksheet interaktif kami dan dapatkan hasil maksimal dari pengalaman belajar Anda.',
    'getting.video.title': 'Tutorial Video',
    'getting.video.description': 'Tonton tutorial video langkah demi langkah yang akan membantu Anda menavigasi berbagai jenis latihan dan aktivitas.',
    'getting.community.title': 'Tanya Komunitas',
    'getting.community.description': 'Bergabunglah dengan komunitas pembelajar dan guru yang dinamis. Ajukan pertanyaan, bagikan tips, dan dapatkan bantuan dari rekan-rekan.',
    'getting.learn.more': 'Pelajari Lebih Lanjut',
    
    // Auth
    'auth.login.title': 'Masuk ke Akun Anda',
    'auth.login.welcome': 'Selamat datang kembali! Silakan masuk untuk melanjutkan.',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.remember': 'Ingat saya',
    'auth.login.forgot': 'Lupa password?',
    'auth.login.signin': 'Masuk',
    'auth.login.no_account': 'Belum punya akun?',
    'auth.login.signup_here': 'Daftar sekarang',
    'auth.login.back_home': '← Kembali ke Beranda',
    
    'auth.register.title': 'Buat Akun Baru',
    'auth.register.subtitle': 'Bergabunglah dengan ribuan pengguna EduWorksheet',
    'auth.register.i_am': 'Saya adalah',
    'auth.register.student': 'Siswa',
    'auth.register.teacher': 'Guru',
    'auth.register.admin': 'Admin',
    'auth.register.full_name': 'Nama Lengkap',
    'auth.register.enter_name': 'Masukkan nama lengkap',
    'auth.register.enter_email': 'nama@email.com',
    'auth.register.create_password': 'Buat password',
    'auth.register.confirm_password': 'Konfirmasi Password',
    'auth.register.repeat_password': 'Ulangi password',
    'auth.register.agree_terms': 'Saya setuju dengan',
    'auth.register.terms': 'Syarat dan Ketentuan',
    'auth.register.and': 'serta',
    'auth.register.privacy': 'Kebijakan Privasi',
    'auth.register.signup_now': 'Daftar Sekarang',
    'auth.register.have_account': 'Sudah punya akun?',
    'auth.register.signin_here': 'Masuk di sini',
    
    // Dashboard
    'dashboard.welcome': 'Selamat datang',
    'dashboard.role.admin': 'Administrator',
    'dashboard.role.teacher': 'Guru',
    'dashboard.role.student': 'Siswa',
    'dashboard.logout': 'Keluar',
    
    // Language
    'language.english': 'English',
    'language.indonesian': 'Bahasa Indonesia',
    
    // Common
    'common.loading': 'Memuat...',
    'common.submit': '✓ Submit Jawaban',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
