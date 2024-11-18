import React from 'react';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl -mt-28">
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
          className="w-38 h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-orange-500 -mt-32 -ml-44"
        />
      </div>
      <div className='mt-36 -ml-96'>
        <p className='text-orange-500 font-semibold text-xs'>Fb:Ramaronjanahary violette</p>
        <p className='text-orange-500 font-semibold text-xs'>Phone:0348944809</p>
        <p className='text-orange-500 font-semibold text-xs'>Email:ramaronjanaharyviolette@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
