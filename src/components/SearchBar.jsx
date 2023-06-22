import React,{useState} from "react";

export default function SearchBar(props) {
   const [ID, setID] = useState("") ; 
   
   const handleChange = (event) => {
    setID(event.target.value);
   } ; 
     
   return (
      <div>
          <input type='search'  value={ID} onChange={handleChange}  />
         <button onClick={()=>props.onSearch(ID)}>Agregar</button> 
         <p>Valor actual del estado id: {ID}</p>  
      </div>
   );
}
