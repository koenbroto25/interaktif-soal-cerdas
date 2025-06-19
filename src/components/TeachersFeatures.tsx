
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, FileText, TrendingUp, Users, Calendar, CheckCircle } from 'lucide-react';

const TeachersFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Save Time, Paper and Track Your Student's Progress
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to providing a seamless, productive experience, whether you're creating content or tracking student progress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Simplify Your Classroom
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Save time with our intuitive worksheet creation tools and streamlined assignment distribution.
                    </h4>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Integrate your classroom without causing guideline disruptions.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Save Time and Paper
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Conduct instant live polls. Effortlessly share one link and receive real-time feedback through one-click registration.
                    </h4>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Create assignments that stick. It's all about integration and workflow.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersFeatures;
