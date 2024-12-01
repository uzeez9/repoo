import React from 'react';

const Benefits = () => {
    const benefits = [
      'Total and Permanent Disability',
      'Personal Accident Benefit',
      'Burial Expenses',
      'Critical Illness'
    ];
  
    return (
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg h-64"></div>
              <div className="bg-gray-200 rounded-lg h-64 mt-8"></div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Coverage & Benefits</p>
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Protection Tailored for You and Yours
              </h2>
              <p className="text-gray-600 mb-6">
                A Shariah-compliant plan designed to provide financial protection for groups 
                under a single Master Certificate.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-yellow-500">★</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default BenefitsSection;