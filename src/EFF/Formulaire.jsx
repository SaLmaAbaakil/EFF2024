import React, { useState } from 'react';

function Formulaire() {
  const [formData, setFormData] = useState({
    theme: '',
    startDate: '',
    endDate: '',
    cost: '',
    expert: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const calculateDays = () => {
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
  
    if (!start.getTime() || !end.getTime()) return 0;
  
    return Math.floor((end - start) / (1000 * 60 * 60 * 24)); 
  };
  

  const totalCost = calculateDays() * Number(formData.cost);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Formulaire de l'événement</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Thème</label>
                <input
                  type="text"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date de début</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date de fin</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Coût journalier</label>
                  <input
                    type="number"
                    value={formData.cost}
                    onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expert</label>
                  <input
                    type="text"
                    value={formData.expert}
                    onChange={(e) => setFormData({ ...formData, expert: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-medium">
                Confirmer
            </button>
          </form>
          {isSubmitted && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="space-y-2">
                <p>L'expert <span className="font-semibold">{formData.expert}</span> assurera le thème : {formData.theme}</p>
                <p>avec un coût journalier : {formData.cost} DH</p>
                <p>pour une durée de {calculateDays()} jours, soit un coût total de {totalCost} DH</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formulaire;