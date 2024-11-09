import React, { useState, useEffect } from 'react';

const Experts2 = () => {
  const [experts, setExperts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/Experts');
        if (!response) {
          console.error('Failed to Fetch ...');
        }
        const data = await response.json();
        setExperts(data); 
      } catch (error) {
        setError(error.message); 
      } 
    };

    fetchData();
  }, []); 

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">Liste des Experts</h1>
      <ul className="list-disc pl-8 space-y-4">
        {experts.map((expert) => (
          <li
            key={expert.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{expert.nom_complet}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts2;
