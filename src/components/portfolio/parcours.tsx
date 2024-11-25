import React from 'react';

function Parcours() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 animate-bounce">
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-6 font-brush">Parcours Universitaire</h1>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-orange-500 animate-pulse">EMIT Fianarantsoa</h2>
            <p className="text-sm text-gray-500">3ème année de Licence</p>
            <p className="text-sm text-gray-400">2023-2024</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-orange-500 animate-pulse">EMIT Fianarantsoa</h2>
            <p className="text-sm text-gray-500">2ème année de Licence</p>
            <p className="text-sm text-gray-400">2022-2023</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-orange-500 animate-pulse">EMIT Fianarantsoa</h2>
            <p className="text-sm text-gray-500">1ère année de Licence</p>
            <p className="text-sm text-gray-400">2021-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parcours;
