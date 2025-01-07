"use client";
import React, { useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Item } from '@radix-ui/react-menubar';
  const  object=[
{
    id:1,
    titre:'Gâteau au chocolat',
    description:'Un gâteau au chocolat délicieux et facile à préparer.',
    image:'/images/gateaux.jpg'
},
{
    id:2,
    titre:'Tarte aux pommes',
    description:'Une délicieuse tarte aux pommes classique.',
    image:'/images/pm.jpg'
},
{
    id:3,
    titre:'Salade César',
    description:'Une salade César avec une sauce maison.',
    image:'/images/Salade.jpg'
},
{
    id:4,
    titre:'Soupe de potiron',
    description:'Une soupe crémeuse au potiron pour lautomne.',
    image:'/images/soupe.jpg'
},
{
    id:5,
    titre:'Pâtes à la carbonara',
    description:'Une recette classique italienne avec des pâtes, des œufs, du fromage et du bacon.',
    image:'/images/pate.jpg'
},
{
    id:6,
    titre:'Pizza Margherita',
    description:'Une pizza simple avec de la tomate, de la mozzarella et du basilic frais',
    image:'/images/pizza.jpg'
},
{
    id:7,
    titre:'Quiche Lorraine',
    description:'Une quiche classique aux lardons, œufs et crème',
    image:'/images/quiche.jpg'
},
{
    id:8,
    titre:'Poulet rôti',
    description:'Un poulet rôti doré et juteux, servi avec des légumes.',
    image:'/images/poulet.jpg'
},
  ]
function recette() {
    const [selectedItem,setSelectedItem]= useState(null);
    const [isModalOpen,setIsModalOpen]=useState(false);

    const openModal = (item:any) =>{
        setSelectedItem(item);
        setIsModalOpen(true);
    };
    const closeModal = () =>{
        setSelectedItem(null);
        setIsModalOpen(false);
    }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-10 px-4 flex flex-col items-center">
      
        <h2 className='text-blue-900 text-3xl font-bold mb-8 text-center'>Une Collection de Recettes Diverses à Essayer</h2>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {object .map((item)=>(
      <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:transform-y-1 transform-all duration-300">
        
            <Card >
                <img src={item.image} alt={item.titre} className='w-full h-40 object-cover'/>
        <CardHeader className='p-4'>
            <CardTitle className='text-lg font-semibold text-blue-800'>{item.titre}</CardTitle>
            <CardDescription className='text-gray-600'>{item.description}</CardDescription>
        </CardHeader>
        
        <CardFooter className='p-4'>
        <button onClick={()=>openModal(item)} className='text-blue-800 px-4 py-4  transform-all duration-500'>Voir la recette</button>
        </CardFooter>
        </Card>
      
      </div>
       ))}
       </div>
       {isModalOpen && selectedItem &&(
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-4/5 max-w-6xl'>
                <h1 className='text-red-950 text-3xl text-center rounded-lg bg-slate-300'>{selectedItem.titre}</h1>
                <p className='text-center'>{selectedItem.description}</p>
                <div>
                    <h1 className='rounded-sm w-36 bg-slate-300'>Ingrédients</h1>
                </div>
                <div>
                    <h1>Instructions</h1>
                </div>
                <button onClick={closeModal} className='text-white bg-red-600 px-4 rounded-lg hover:bg-red-600 transition-all duration-300'>Fermer</button>
            </div>
        </div>
       )

       }
    </div>
  )
}

export default recette
