
import React from 'react';
import { Button } from '@/components/ui/button';

const IntegrationSection = () => {
  const integrations = [
    {
      name: 'Microsoft Teams',
      icon: '🏢',
      color: 'bg-blue-100'
    },
    {
      name: 'Google Classroom',
      icon: '📚',
      color: 'bg-green-100'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-green-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Integrate With Other Learning Platforms
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          If you use worksheets on popular platforms, you can export them in various formats.
        </p>

        <div className="flex justify-center items-center space-x-8 mb-12">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center">
              <div className={`${integration.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-2xl">{integration.icon}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
        >
          View More Integrations
        </Button>
      </div>
    </section>
  );
};

export default IntegrationSection;
