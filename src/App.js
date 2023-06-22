import './App.css';
import Cards from './components/Cards.jsx';
//import Card from './components/Card.jsx';
//import SearchBar from './components/SearchBar.jsx';
// import personajes from './data.js';
// import characters, { Rick } from './data.js';
 import axios from 'axios';
import React,{useState} from 'react';
import SearchBar from './components/SearchBar';


function App() {
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };
   const [characters, setCharacters] = useState([example]);
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
      return (
      <div className='App'>
         
        <SearchBar onSearch={onSearch}/> 
         <Cards characters={characters} />
         {/* <Card
            id={personajes.id}
            name={personajes.name}
            status={personajes.status}
            species={personajes.species}
            gender={personajes.gender}
            origin={Rick.origin.name}
            image={personajes.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
