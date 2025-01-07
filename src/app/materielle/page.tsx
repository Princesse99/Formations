"use client";
import React, { use, useState } from 'react'

const tableau = [ 
    {
        id:1,
        marque:'ASUS',
        nom:'Ordinateur portable',
        description:'CORE i5 8th Gen 1T 16Go',
        image:'/images/ordinateur.jpg',
        prix:'2000000 Ar'
    },
    {
        id:2,
        marque:'Gammer',
        nom:'Souris',
        description:'1cm ',
        image:'/images/souris.jpg',
        prix:'200000 Ar'
    },
    {
        id:3,
        marque:'iPhone ',
        nom:'iPhone',
        description:'iPhone 15 pro max 128Go ',
        image:'/images/iphone.jpg',
        prix:'1500000 Ar'
    },


];

function page() {
    const [selectedItem ,setSelectedItem]=useState(null);
    const [isModalOpen,setIsModalOpen] =useState(false);
     const openModal =(item:any)=>{
        setSelectedItem (item);
        setIsModalOpen (true);
     } 
     const closeModal =()=>{
        setIsModalOpen(false);
        setSelectedItem(null);
     }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {tableau.map((item)=>(
            <div
            key={item.id}
             className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
               <img src={item.image} alt={item.nom} className='w-60 object-top h-48 mt-4 ml-4'/>
              </div>
              <div className='p-4'>
                <h1 className="text-lg font-semibold text-gray-800">{item.marque}</h1>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-red-600 font-bold text-lg">{item.prix}</span>
                <button onClick={()=> openModal(item)} className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700 -ml-4">Voir +</button>
              </div>
            </div>
        ))}
      </div>
{/* Modal */}
 {isModalOpen && selectedItem &&(
       <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 font-bold">
                X
            </button>
            <h2 className="text-2xl font-semibold">{selectedItem.marque}</h2>
            <img src={selectedItem.image} alt={selectedItem.nom} className='w-full h-48 object-cover mt-4'/>
        </div>
        <div className="mt-4">
              <span className="text-red-600 font-bold text-lg">
                {selectedItem.prix}
              </span>
              <p>{selectedItem.description}</p>
            </div>
       </div>
 )
 }
    </div>
  )
}

export default page
