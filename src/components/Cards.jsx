
import Card from './Card';

export default function Cards( props) {
const {characters} = props; 
console.log(characters);
 return ( 
    <div>

   {
      characters.map((character)=> {
         return (
         <Card
         key={character.id}   
         id= {character.id}   
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
         
          />
         );
      })
   }
        
      
   </div>
);
}
