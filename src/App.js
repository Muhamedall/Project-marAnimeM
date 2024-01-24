// App.js

import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataApiContext from './AnimeProject/ContextApi/DataApi';
import Shop from './AnimeProject/Shoping/Shop';
import NavBar from './AnimeProject/NavBar';
import Homme from './AnimeProject/Home';
import MoviesAnime from './AnimeProject/MoviesAnime';
import Fromuser from './AnimeProject/Formuser';
import Login from './AnimeProject/Login';
import DetailShop from './AnimeProject/Shoping/DetailShop';
import SaveAnime from './AnimeProject/SaveAnime';
import DataShoping from './AnimeProject/Shoping/DataShoping';


function App() {
    const [searchTerm, setSearchTerm] = useState('');

    
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  return (
    <DataApiContext>
      <BrowserRouter>
        <NavBar  onSearchChange={handleSearchChange}  />
        <Routes>
          <Route path="/" element={<Homme searchTerm={searchTerm}/>} />
          <Route path="Shop" element={<Shop />} />
          <Route path="MoviesAnime" element={<MoviesAnime />} />
          <Route path='Fromuser' element={<Fromuser />} />
          <Route path="Login" element={<Login />} />
          <Route path="/detail/:productNam" element={<DetailShop />} />
          <Route path="SaveAnime" element={<SaveAnime />} />
          <Route path="Datashoping" element={<DataShoping />} />
        </Routes>
      </BrowserRouter>
    </DataApiContext>
  );
}

export default App;
