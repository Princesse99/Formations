import Link from 'next/link';
import React from 'react';

function Accueil() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 ">
    
    <header className="text-center space-y-4 mt-10 animate-slideUp">
    <h1 className="text-4xl font-bold text-orange-600 animate-fadeIn duration-1000">Hi, RAMARONJANAHARY</h1>

  <h2 className="text-2xl text-gray-800 font-medium animate-fadeIn">Violette Hiolimalala Harisoa Sarobidy</h2>
  <p className="text-gray-600 max-w-md mx-auto animate-fadeIn">
    Je suis étudiante de l'université de Fianarantsoa au sein de l'EMIT, parcours Informatique.
  </p>
</header>

      
      <div className="relative mt-5">
        <img
          src="/images/port.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-orange-500 -mt-96 -ml-2"
        />
      </div>

  
      <div className="mt-8 flex space-x-4">
        <Link href="/contact" className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800" replace>
          Me Contacter
        </Link>
        <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700">
          Mon Parcours
        </button>
      </div>

    
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2024 RAMARONJANAHARY. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Accueil;
