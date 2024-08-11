import React, { useEffect, useState } from 'react';
import './List.css';
import { url, currency } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Liste = () => {
  const [liste, setListe] = useState([]);

  const recupererListe = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setListe(response.data.data);
    } else {
      toast.error("Erreur");
    }
  };

  const supprimerAliment = async (alimentId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: alimentId,
    });
    await recupererListe();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Erreur");
    }
  };

  useEffect(() => {
    recupererListe();
  }, []);

  // Liste des catégories à inclure
  const categoriesIncluses = ["café", "lait", "thé", "jus", "détox", "plats", "entrée", "petit déjeuner"];

  return (
    <div className='list add flex-col'>
      <p>Liste de tous les aliments</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Nom</b>
          <b>Catégorie</b>
          <b>Prix</b>
          <b>Action</b>
        </div>
        {liste
          .filter(item => categoriesIncluses.includes(item.category.trim().toLowerCase()))
          .map((item, index) => (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className='cursor' onClick={() => supprimerAliment(item._id)}>x</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Liste;
