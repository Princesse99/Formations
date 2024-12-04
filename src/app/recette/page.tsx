import React from 'react'

function page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <div className="relative">
          <img src="/images/pizza.jpg" alt="Pizza" className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
            NEW
          </div>
        </div>
        <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">Pizza Délicieuse</h1>
        <p className="text-sm text-gray-500 mt-1">
        Un plat Malgache classique garni de mozzarella, de tomates et de basilic.
        </p>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-red-600 font-bold text-lg">20000 Ar</span>
            <button className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700">
              Voir plus
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ml-6">
        <div className="relative">
          <img src="/images/haborger.jpg" alt="Pizza" className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
            NEW
          </div>
        </div>
        <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">Hamburger Délicieuse</h1>
        <p className="text-sm text-gray-500 mt-1">
        Un plat Malgache classique garni de mozzarella, de tomates et de basilic.
        </p>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-red-600 font-bold text-lg">15000 Ar</span>
            <button className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700">
              Voir plus
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ml-6">
        <div className="relative">
          <img src="/images/gateaux.jpg" alt="Pizza" className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
            NEW
          </div>
        </div>
        <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">Gateaux Délicieuse</h1>
        <p className="text-sm text-gray-500 mt-1">
        Un plat Malgache classique garni de cholocat ,farine et oeufs.
        </p>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-red-600 font-bold text-lg">40000 Ar</span>
            <button className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700">
              Voir plus
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ml-6">
        <div className="relative">
          <img src="/images/frite.jpg" alt="Pizza" className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
            NEW
          </div>
        </div>
        <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">Frite Délicieuse</h1>
        <p className="text-sm text-gray-500 mt-1">
        Un plat Malgache classique garni de pomme de terre .
        </p>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-red-600 font-bold text-lg">10000 Ar</span>
            <button className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700">
              Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
