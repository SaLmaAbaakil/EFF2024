import React from 'react';
import Expert from './Expert';
import expertsData from './data';


const Expert1 = ({ expert }) => {
    return (
      <div className="mb-6 p-4 border border-gray-300 rounded-md bg-white shadow-md">
        {expertsData.map((expert, index) => (
            <Expert key={index} expert={expert} />
        ))}
      </div>
    );
  };
  
export default Expert1;