import { Facebook, Mail, Phone } from 'lucide-react';
import React from 'react';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl -mt-28 animate-tada">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Mon Contact</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nom"
            className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Votre message"
            className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          ></textarea>
        </div>

        <button className="w-80 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Envoyer
        </button>
      </div>

      <div>
        <img
          src="/images/contact.jpg"
          alt="Profile"
          className="w-38 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-orange-500 -mt-32 -ml-44 animate-bounceImage translate-x-6" // Apply animation here
        />
      </div>

     <div className="mt-36 -ml-96 space-y-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <Facebook className="text-blue-700 w-5 h-5" />
          <p className="text-blue-700 font-semibold text-sm">
            Ramaronjanahary Violette
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Phone className="text-green-600 w-5 h-5" />
          <p className="text-green-600 font-semibold text-sm">0348944809</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Mail className="text-red-500 w-5 h-5" />
          <p className="text-red-500 font-semibold text-sm">
            ramaronjanaharyviolette@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
