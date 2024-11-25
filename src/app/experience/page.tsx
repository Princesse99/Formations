import React from 'react';
import { Circle } from 'lucide-react';

function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 animate-bounce">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-brush text-orange-500 mb-4">Experience</h1>
          <p className="text-gray-600 text-lg">
            Découvrez mon experiance en développement web et design UX/UI.
          </p>
        </div>

        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Développement Web</h3>
          <ul className="space-y-4 pl-8">
            <li className="flex items-start">
              <Circle className="text-orange-500 mr-3" />
              <p className="text-gray-700">
                Création application web <span className="font-semibold">"Gestion de vente des ordinateurs"</span>
              </p>
            </li>
            <li className="flex items-start">
              <Circle className="text-orange-500 mr-3" />
              <p className="text-gray-700">
                Création application web <span className="font-semibold">"Gestion de centre d'immatriculation"</span>
              </p>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Design UX/UI</h3>
          <ul className="space-y-4 pl-8">
            <li className="flex items-start">
              <Circle className="text-orange-500 mr-3" />
              <p className="text-gray-700">
                Création de design pour <span className="font-semibold">"Gestion de vente en ligne"</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
