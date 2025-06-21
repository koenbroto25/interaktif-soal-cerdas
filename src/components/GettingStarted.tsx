
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, MessageCircle, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GettingStarted = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: BookOpen,
      title: t('getting.guide.title'),
      description: t('getting.guide.description'),
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Play,
      title: t('getting.video.title'),
      description: t('getting.video.description'),
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: t('getting.community.title'),
      description: t('getting.community.description'),
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('getting.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t('getting.description')}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={t('getting.search')}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <step.icon className={`h-10 w-10 ${step.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {step.description}
              </p>
              
              <Link to="/register">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  {t('getting.learn.more')}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
