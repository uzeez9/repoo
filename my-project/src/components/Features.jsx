import React from 'react';

const Features = () => {
    const features = [
      {
        title: 'Period of Takaful / Mode of Payment',
        description: 'The period of takaful is annual and the contribution paid annually'
      },
      {
        title: 'Contribution amount',
        description: 'This depends on the Sum Covered of individual account covered and age'
      },
      {
        title: 'Sum Covered',
        description: 'This can be a multiple of the total annual contribution'
      },
      {
        title: 'Death Benefits',
        description: 'Payment of the death claim all causes, except those listed under exclusions'
      }
    ];
  
    return (
      <div className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Key Features at a Glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default FeaturesSection;