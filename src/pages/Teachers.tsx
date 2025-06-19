
import React from 'react';
import Navbar from '@/components/Navbar';
import TeachersHero from '@/components/TeachersHero';
import TeachersFeatures from '@/components/TeachersFeatures';
import IntegrationSection from '@/components/IntegrationSection';
import BrowseWorksheets from '@/components/BrowseWorksheets';
import GettingStarted from '@/components/GettingStarted';
import ReadyToStart from '@/components/ReadyToStart';
import Footer from '@/components/Footer';

const Teachers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TeachersHero />
      <TeachersFeatures />
      <IntegrationSection />
      <BrowseWorksheets />
      <GettingStarted />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default Teachers;
