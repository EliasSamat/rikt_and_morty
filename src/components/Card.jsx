export default function Card(props, onClose) {
   const {name , status, especie, genero, origin, image} = props ; 
   return (
      <div>
         <button onClick={onClose}>X</button>  
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{especie}</h2>
         <h2>{genero}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={""} /> 
      </div>
   );
}
