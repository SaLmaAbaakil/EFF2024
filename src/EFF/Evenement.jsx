import React from 'react';

const Evenement = ({ expertsData }) => {

    const totalCout = expertsData.reduce((total, expert) => {
        return total + expert.evenements.reduce((eventTotal, evt) => {
            return eventTotal + evt.cout_journalier * evt.duree;
        }, 0);
    }, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Liste des Événements</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-pink-100">
            <th className="border border-gray-300 p-2">Thème</th>
            <th className="border border-gray-300 p-2">Date début</th>
            <th className="border border-gray-300 p-2">Date fin</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Coût journalier</th>
            <th className="border border-gray-300 p-2">Durée (jours)</th>
            <th className="border border-gray-300 p-2">Coût Total Event</th>
          </tr>
        </thead>
        <tbody>
          {expertsData.map(expert =>
            expert.evenements.map((evt, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{evt.theme}</td>
                <td className="border border-gray-300 p-2">{evt.date_debut}</td>
                <td className="border border-gray-300 p-2">{evt.date_fin}</td>
                <td className="border border-gray-300 p-2">{evt.description}</td>
                <td className="border border-gray-300 p-2">{evt.cout_journalier}€</td>
                <td className="border border-gray-300 p-2">{evt.duree}</td>
                <td className="border border-gray-300 p-2">
                  {evt.cout_journalier * evt.duree}€
                </td>
              </tr>
            ))
          )}
          <tr className="bg-gray-100 font-bold">
            <td colSpan={6} className="border border-gray-300 p-2 text-right">
              Total des coûts des événements assurés est:
            </td>
            <td className="border border-gray-300 p-2">{totalCout}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Evenement;