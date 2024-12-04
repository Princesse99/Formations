"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { User, UserPlus, KeyRound, Mail, Phone, MapPinHouse } from 'lucide-react';

const TestPages = () => {
  // Déclarez un état pour chaque champ du formulaire
  const [name, setName] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [adresse, setAdresse] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [motDePasse, setMotDePasse] = useState<string>('');

  // Fonction de soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Vous pouvez ici traiter les données ou les envoyer à une API
    console.log('Form Data Submitted:', {
      name,
      prenom,
      adresse,
      contact,
      email,
      motDePasse,
    });
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <div className="relative mt-2">
          <img src='/images/users.png' className='w-28 ml-28 -mt-8 space-x-6' alt="user-icon"/>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            {/* Champ pour le nom */}
            <div className='flex items-center space-x-2'>
              <label htmlFor="name"><User className='text-blue-700' /></label>
              <Input 
                type="text" 
                placeholder="Nom" 
                className='flex-1' 
                name='name'  
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>

            {/* Champ pour le prénom */}
            <div className='flex items-center space-x-2'>
              <label htmlFor="prenom"><UserPlus className='text-blue-700' /></label>
              <Input 
                type="text" 
                placeholder="Prenom" 
                className='flex-1' 
                name='prenom' 
                value={prenom} 
                onChange={(e) => setPrenom(e.target.value)} 
              />
            </div>

            {/* Champ pour l'adresse */}
            <div className='flex items-center space-x-2'>
              <label htmlFor="adresse"><MapPinHouse className='text-blue-700' /></label>
              <Input 
                type="text" 
                placeholder="Adresse" 
                className='flex-1' 
                name='adresse' 
                value={adresse} 
                onChange={(e) => setAdresse(e.target.value)} 
              />
            </div>

            {/* Champ pour le contact */}
            <div className='flex items-center space-x-2'>
              <label htmlFor="contact"><Phone className='text-blue-700' /></label>
              <Input 
                type="tel" 
                placeholder="Contact" 
                className='flex-1' 
                name='contact' 
                value={contact} 
                onChange={(e) => setContact(e.target.value)} 
              />
            </div>

            {/* Champ pour l'email */}
            <div className='flex items-center space-x-2'>
              <label htmlFor="email"><Mail className='text-blue-700' /></label>
              <Input 
                type="email" 
                placeholder="Email" 
                className='flex-1' 
                name='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            {/* Champ pour le mot de passe */}
            <div className='flex items-center space-x-2'>
              <label htmlFor="motDePasse"><KeyRound className='text-blue-700' /></label>
              <Input 
                type="password" 
                placeholder="Mot de Passe" 
                className='flex-1' 
                name='motDePasse' 
                value={motDePasse} 
                onChange={(e) => setMotDePasse(e.target.value)} 
              />
            </div>

            {/* Bouton de soumission */}
            <div>
              <button 
                type="submit" 
                className='bg-blue-700 rounded-md text-white border border-slate-300 w-72 ml-8 h-11'
              >
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestPages;