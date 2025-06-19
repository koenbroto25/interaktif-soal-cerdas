
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import StatsSection from '@/components/StatsSection';
import PopularWorksheets from '@/components/PopularWorksheets';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Features />
      <StatsSection />
      <PopularWorksheets />
      <Footer />
    </div>
  );
};

export default Index;
