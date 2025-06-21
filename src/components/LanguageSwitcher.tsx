
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Button
        variant={language === 'id' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('id')}
        className="text-xs px-2 py-1"
      >
        ID
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs px-2 py-1"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
