import React, { useState } from 'react';
import { FaUserCircle, FaHeart, FaComment, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importer Link
import Laptop from "../Assets/voyage1.jpg";



const Description = () => {
  const [likedStates, setLikedStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentComment, setCurrentComment] = useState('');
  const [commentedSouvenirId, setCommentedSouvenirId] = useState(null);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const toggleLike = (id) => {
    setLikedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openCommentModal = (id) => {
    setCommentedSouvenirId(id);
    setIsModalOpen(true);
  };

  const handleCommentSubmit = () => {
    console.log(`Commentaire pour le souvenir ${commentedSouvenirId}: ${currentComment}`);
    setIsModalOpen(false);
    setCurrentComment('');
    setIsSuccessMessageVisible(true);
  };

  const closeSuccessMessage = () => {
    setIsSuccessMessageVisible(false);
  };

  const souvenirsData = [
    { id: 1, user: "Paul John", image: "/images/avatar.jpg" },
    { id: 2, user: "Paul John", image: "/images/avatar.jpg" },
    { id: 3, user: "Paul John", image: "/images/avatar.jpg" },
    { id: 4, user: "Paul John", image: "/images/avatar.jpg" }
  ];

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8">
      <h1 className="text-teal-600 text-center text-2xl font-bold mb-4">Liste les souvenirs</h1>
      <p className="text-red-600 mb-4 text-center">Pour ajouter votre souvenir</p>
      
      <Link to="/ajouter" className="bg-teal-500 text-white px-4 py-2 rounded flex items-center mx-auto mb-4">
        <FaPlus className="mr-2" /> Ajouter
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {souvenirsData.map((souvenir) => (
          <div key={souvenir.id} className="border rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center mb-2">
              <FaUserCircle className="text-xl mr-2" />
              <span className="font-semibold">{souvenir.user}</span>
            </div>
            <img src={Laptop} alt="/" className="w-full h-32 object-cover" />
            <div className="p-4 flex justify-center">
              <FaHeart
                className={`mr-2 ${likedStates[souvenir.id] ? 'text-red-500' : 'text-gray-300'}`}
                onClick={() => toggleLike(souvenir.id)}
              />
              <FaComment className="text-gray-700" onClick={() => openCommentModal(souvenir.id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre modale pour les commentaires */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Ajouter votre commentaire</h2>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              value={currentComment}
              onChange={(e) => setCurrentComment(e.target.value)}
              placeholder="Ajouter votre commentaire ..."
            />
            <div className="flex justify-between mt-4">
              <button className="border rounded px-4 py-2" onClick={() => setIsModalOpen(false)}>Annuler</button>
              <button className="bg-teal-500 text-white rounded px-4 py-2" onClick={handleCommentSubmit}>Confirmer</button>
            </div>
          </div>
        </div>
      )}

      {/* Message de succès */}
      {isSuccessMessageVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 text-center">
            <h2 className="text-lg font-bold mb-4">Votre commentaire a été publié avec succès!</h2>
            <button className="bg-teal-500 text-white rounded px-4 py-2" onClick={closeSuccessMessage}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;