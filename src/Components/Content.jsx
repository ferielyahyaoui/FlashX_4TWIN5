import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false); // État pour gérer la soumission

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    // Vous pouvez ajouter ici une logique pour enregistrer les informations
    setSubmitted(true); // Afficher le message de confirmation
  };

  return (
    <div className="bg-teal-500 min-h-screen flex items-center justify-center">
      {!submitted ? (
        <div className="bg-white p-8 shadow-lg w-full flex">
          <div className="w-1/2 pr-4">
            <h1 className="text-2xl font-bold text-teal-600 mb-4 text-center">Ajouter votre souvenir</h1>
            
            <h2 className="text-lg font-semibold mb-2">Informations personnelles</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="abcd@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Adresse</label>
                <input
                  type="text"
                  placeholder="1234 Text Dr, Clearwater, FL"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Ville</label>
                <input
                  type="text"
                  placeholder="Clearwater"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pays</label>
                <input
                  type="text"
                  placeholder="Tunisie"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  placeholder="Description de votre souvenir"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500 h-24"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button type="button" className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100">Annuler</button>
                <button type="submit" className="bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600">Confirmer</button>
              </div>
            </form>
          </div>

          <div className="w-1/2 pl-4">
            <label className="block text-sm font-medium text-gray-700">Ajouter une photo</label>
            <div className="relative w-full">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 block w-full opacity-0 absolute inset-0 cursor-pointer"
              />
              <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center border border-dashed border-teal-500">
                {image ? (
                  <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <div className="flex flex-col items-center">
                    <FaPlus className="text-teal-600 text-3xl mb-2" />
                    <span className="text-teal-600">Pour ajouter photo cliquez ici</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Votre souvenir a été publié avec succès!</h2>
          <span className="text-teal-500 mb-4"><FaPlus /></span>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Content;