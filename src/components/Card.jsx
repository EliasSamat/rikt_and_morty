import React, { useState } from 'react';

function Card({ id, name, status,  especie, genero, origin, image, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
   // onClose();
  };

  if (!isVisible) {
    return null; // Retorna null si la tarjeta no es visible
  }
   return (
      <div>
         <button onClick={handleClose}>cerrar</button>  
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{especie}</h2>
         <h2>{genero}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={""} /> 
      </div>
   );
}
export default Card ;  