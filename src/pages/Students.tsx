
import React from 'react';
import Navbar from '@/components/Navbar';
import StudentsHero from '@/components/StudentsHero';
import BrowseWorksheets from '@/components/BrowseWorksheets';
import GettingStarted from '@/components/GettingStarted';
import ReadyToStart from '@/components/ReadyToStart';
import Footer from '@/components/Footer';

const Students = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StudentsHero />
      <BrowseWorksheets />
      <GettingStarted />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default Students;
