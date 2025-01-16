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
import { Item } from "@radix-ui/react-menubar";
const object = [
  {
    id: 1,
    titre: "Gâteau au chocolat",
    description: "Un gâteau au chocolat délicieux et facile à préparer.",
    image: "/images/gateaux.jpg",
    ingredients:
      "2 tasses de farine,1 tasse de sucre,1/2 tasse de cacao en poudre,1 cuil. à café de levure chimique,1/2 cuil. à café de sel,2 œufs,1 tasse de lait,1/2 tasse d huile végétale,1 cuil. à café d extrait de vanille",
      instructions:'Préchauffer le four à 175°C (350°F),Graisser et fariner un moule de 23 cm,Dans un grand bol, mélanger les ingrédients secs,Ajouter les ingrédients liquides et mélanger jusquà obtenir une pâte lisse,Verser la pâte dans le moule préparé,Cuire pendant 30-35 minutes ou jusqu à ce qu un cure-dent en ressorte propre,Laisser refroidir avant de servir'
  },
  {
    id: 2,
    titre: "Tarte aux pommes",
    description: "Une délicieuse tarte aux pommes classique.",
    image: "/images/pm.jpg",
    ingredients:"1 pâte brisée,4 pommes,100g de sucre,1 cuil. à soupe de cannelle,30g de beurre,1 cuil. à soupe de farine",
    instructions:"Préchauffer le four à 180°C (350°F).Éplucher et couper les pommes en tranches fines.Dans une poêle, faire fondre le beurre et ajouter les pommes.Saupoudrer de sucre et de cannelle, puis cuire à feu doux pendant 10 minutes.Étaler la pâte brisée dans un moule à tarte.Ajouter les pommes cuites sur la pâte, puis saupoudrer de farine.Cuire au four pendant 25-30 minutes."
  },
  {
    id: 3,
    titre: "Salade César",
    description: "Une salade César avec une sauce maison.",
    image: "/images/Salade.jpg",
    ingredients:"1 laitue romaine,100g de poulet grillé,50g de parmesan râpé,50g de croûtons,3 cuil. à soupe de mayonnaise,1 cuil. à soupe de moutarde,1 cuil. à soupe de vinaigre,1 gousse d'ail émincée",
    instructions:"Laver et couper la laitue romaine.Mélanger la mayonnaise, la moutarde, le vinaigre et l'ail pour la sauce.Ajouter le poulet grillé, le parmesan et les croûtons sur la laitue.Verser la sauce et mélanger.Servir immédiatement."
  },
  {
    id: 4,
    titre: "Soupe de potiron",
    description: "Une soupe crémeuse au potiron pour lautomne.",
    image: "/images/soupe.jpg",
    ingredients:'1 potiron,1 oignon,1 carotte,1 pomme de terre,500 ml de bouillon de légumes,200 ml de crème,Sel et poivre',
    instructions:"Peler et couper le potiron, l oignon, la carotte et la pomme de terre.Dans une grande casserole, faire revenir l'oignon dans un peu d'huile.Ajouter le potiron, la carotte et la pomme de terre, puis couvrir avec le bouillon.Cuire pendant 20-30 minutes jusqu'à ce que les légumes soient tendres.Mixer la soupe jusqu'à ce qu'elle soit lisse, puis ajouter la crème.Saler et poivrer, puis servir chaud."
  },
  {
    id: 5,
    titre: "Pâtes à la carbonara",
    description:
      "Une recette classique italienne avec des pâtes, des œufs, du fromage et du bacon.",
    image: "/images/pate.jpg",
    ingredients:"200g de pâtes,100g de lardons,2 œufs,50g de parmesan râpé,50g de pecorino râpé,Poivre noir",
    instructions:"Cuire les pâtes dans de l'eau salée.Dans une poêle, faire revenir les lardons.Battre les œufs avec le fromage râpé et le poivre.Mélanger les pâtes avec les lardons, puis ajouter le mélange œufs-fromage.Servir immédiatement avec du parmesan râpé"
  },
  {
    id: 6,
    titre: "Pizza Margherita",
    description:
      "Une pizza simple avec de la tomate, de la mozzarella et du basilic frais",
    image: "/images/pizza.jpg",
    ingredients:"1 pâte à pizza,200g de sauce tomate,150g de mozzarella,Quelques feuilles de basilic frais,Sel et huile d'olive",
    instructions:"Préchauffer le four à 220°C (425°F).Étaler la pâte à pizza et étaler la sauce tomate dessus.Ajouter la mozzarella en morceaux et les feuilles de basilic.Cuire la pizza pendant 10-12 minutes.Servir avec un filet d'huile d'olive."
  },
  {
    id: 7,
    titre: "Quiche Lorraine",
    description: "Une quiche classique aux lardons, œufs et crème",
    image: "/images/quiche.jpg",
    ingredients:"1 pâte brisée,200g de lardons,3 œufs,200ml de crème fraîche,150g de fromage râpé,Poivre et sel",
    instructions:"Préchauffer le four à 180°C (350°F).Faire revenir les lardons dans une poêle.Battre les œufs avec la crème et le fromage râpé.Verser le mélange sur la pâte, puis ajouter les lardons.Cuire pendant 30-35 minutes."
  },
  {
    id: 8,
    titre: "Poulet rôti",
    description: "Un poulet rôti doré et juteux, servi avec des légumes.",
    image: "/images/poulet.jpg",
    ingredients:"1 poulet entier,2 carottes,2 pommes de terre,1 oignon,Herbes de Provence,Sel et poivre",
    instructions:"Préchauffer le four à 200°C (400°F).Frotter le poulet avec des herbes et de l'huile.Placer le poulet dans un plat et ajouter les légumes coupés.Cuire pendant 1 heure à 1 heure 15 minutes.Servir avec les légumes rôtis."
  },
];
function recette() {
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
      <h2 className="text-blue-900 text-3xl font-bold mb-8 text-center">
        Une Collection de Recettes Diverses à Essayer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {object.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:transform-y-1 transform-all duration-300"
          >
            <Card>
              <img
                src={item.image}
                alt={item.titre}
                className="w-full h-40 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold text-blue-800">
                  {item.titre}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="p-4">
                <button
                  onClick={() => openModal(item)}
                  className="text-blue-800 px-4 py-4  transform-all duration-500"
                >
                  Voir la recette
                </button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-4/5 max-w-6xl">
            <h1 className="text-red-950 text-3xl text-center rounded-lg bg-slate-300">
              {selectedItem.titre}
            </h1>
            <p className="text-center">{selectedItem.description}</p>
            <div>
              <h1 className="rounded-sm w-36 bg-slate-300">Ingrédients</h1>
              <p>{selectedItem.ingredients}</p>
            </div>
            <div>
              <h1 className="rounded-sm w-36 bg-slate-300">Instructions</h1>
              <p>{selectedItem.instructions}</p>
              
            </div>
            <button
              onClick={closeModal}
              className="text-white bg-red-600 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default recette;
