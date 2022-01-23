import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterItem from './CharacterItem';



const CharacterGrid = () => {
    
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        const fetchCharacters = async () => {
            const result = await axios('https://www.breakingbadapi.com/api/characters?')
            setCharacters(result.data)
        }
        fetchCharacters();
        
    },[])
    return (
        <div className='cards'>
            {characters.map((characters, id) => (
                <CharacterItem characters={characters} key={id}/>
            ))}
       </div>
    )










};

export default CharacterGrid;
