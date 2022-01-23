import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/layout/Header';




const App = ({characters}) => {
  
  return (
    <div className='container'>
      <Header />
      <CharacterGrid characters={characters} />
    </div>
  )
}

export default App
