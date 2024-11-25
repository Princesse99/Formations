import React from "react";
import { Slider } from "@/components/ui/slider";

function Competence() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full">
        <h1 className="text-5xl font-brush text-orange-600 mb-10 text-center tracking-wide">
          Compétences
        </h1>

        {/* Skill Sliders */}
        <div className="space-y-8">
          <div>
            <h2 className="text-gray-800 font-semibold text-2xl mb-4">
              Développement Web
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">React.js</p>
                <Slider
                  defaultValue={[33]}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">HTML & CSS</p>
                <Slider
                  defaultValue={[33]}
                  max={35}
                  step={1}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">
                  Tailwind CSS
                </p>
                <Slider
                  defaultValue={[33]}
                  max={40}
                  step={1}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">Next.js</p>
                <Slider
                  defaultValue={[33]}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-800 font-semibold text-2xl mb-4">
              Design Graphique
            </h2>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Figma</p>
              <Slider
                defaultValue={[33]}
                max={40}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Skill Icons */}
        <div className="flex items-center justify-around mt-10 gap-8">
          <img
            src="/images/react.png"
            alt="React"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <img
            src="/images/html.png"
            alt="HTML"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <img
            src="/images/css.jpg"
            alt="CSS"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <img
            src="/images/tailwind.jpg"
            alt="Tailwind CSS"
            className="w-16 h-16 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Competence;
