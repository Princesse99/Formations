"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const objet = [
  {
    id: 1,
    titre: "Gâteau au chocolat",
    description: "Un gâteau au chocolat délicieux et facile à préparer",
    image: "/images/gateaux.jpg",
  },
  {
    id: 2,
    titre: "Tarte aux pommes",
    description: "Une délicieuse tarte aux pommes classique.",
    image: "/images/pm.jpg",
  },
  {
    id: 3,
    titre: "Pizza Margherita",
    description:
      "Une pizza simple avec de la tomate, de la mozzarella et du basilic frais.",
    image: "/images/pizza.jpg",
  },
  {
    id: 4,
    titre: "Soupe de potiron",
    description: "Une quiche classique aux lardons, œufs et crème.",
    image: "/images/soupe.jpg",
  },
  {
    id: 5,
    titre: "Poulet rôti",
    description: "Un poulet rôti doré et juteux, servi avec des légumes.",
    image: "/images/poulet.jpg",
  },
  {
    id: 6,
    titre: "Salade César",
    description: "UUne salade César avec une sauce maison.",
    image: "/images/Salade.jpg",
  },
];
function page() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-10 px-4 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {objet.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:transform-y-1 transform-all duration-300">
            <Card>
                <img src={item.image} alt={item.image} className="w-full h-40 object-cover"/>
              <CardHeader>
                <CardTitle>{item.titre}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className='p-4'>
           <button  className='text-blue-800 px-4 py-4  transform-all duration-500'>Voir la recette</button>
        </CardFooter>
            </Card>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default page;
