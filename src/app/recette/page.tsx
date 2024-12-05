"use client";
import React, { useState } from "react";

const liste = [
  {
    id: 1,
    title: "Gateau au chocolat",
    description: "Ajouter de la farine, du chocolat, des oeufs, etc...",
    price: "40000 Ar",
    image: "/images/gateaux.jpg",
    details:
      "C'est un délicieux gâteau au chocolat, parfait pour toutes les occasions.",
  },
  {
    id: 2,
    title: "Pizza Délicieuse",
    description:
      "Un plat Malgache classique garni de mozzarella, de tomates et de basilic.",
    price: "20000 Ar",
    image: "/images/pizza.jpg",
    details: "Cette pizza est un mélange parfait de saveurs méditerranéennes.",
  },
  {
    id: 3,
    title: "Hamburger Délicieuse",
    description:
      "Un plat Malgache classique garni de mozzarella, de tomates et de basilic.",
    price: "15000 Ar",
    image: "/images/haborger.jpg",
    details: "Un hamburger juteux avec un steak de bœuf et des légumes frais.",
  },
  {
    id: 4,
    title: "Frite Délicieuse",
    description: "Un plat Malgache classique garni de pomme de terre.",
    price: "10000 Ar",
    image: "/images/frite.jpg",
    details:
      "Des frites dorées et croquantes, accompagnées d'une sauce maison.",
  },
  {
    id: 5,
    title: "Frite au fromage",
    description: "Un plat avec fromage classique garni de pomme de terre.",
    price: "10000 Ar",
    image: "/images/frite.jpg",
    details: "Des frites dorées et moelleuses, accompagnées d'une sauce maison.",
  },
];

function Page() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {liste.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
                NEW
              </div>
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h1>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-red-600 font-bold text-lg">
                  {item.price}
                </span>
                <button
                  className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700"
                  onClick={() => openModal(item)}
                >
                  Voir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 font-bold"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold">{selectedItem.title}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-48 object-cover mt-4"
            />
            <p className="text-sm text-gray-500 mt-4">{selectedItem.details}</p>
            <div className="mt-4">
              <span className="text-red-600 font-bold text-lg">
                {selectedItem.price}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
