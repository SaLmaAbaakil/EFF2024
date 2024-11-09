import React from 'react';
import Evenement from './Evenement';
import expertsData from './data';

const Expert = ({ expert }) => {
  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-md bg-white shadow-md">
      <li className="text-xl font-bold text-gray-800 mb-4">{expert.nom_complet}</li>
      <Evenement expertsData={expertsData} />
    </div>
  );
};

export default Expert;
