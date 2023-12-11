import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Navbar from './Navbar';


export default function MyApp() {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const newData = Array.isArray(response.data) ? response.data : [];
        setFetchedData(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const filteredData = fetchedData.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchResults(filteredData);
   
  };

  const handleReset = () => {
    setSearchInput('');
    setSearchResults([]);
  };

  return (
    <>
      <header>
        <h2>Search:</h2>
        <input
          type="text"
          id="Search_input"
          onChange={handleSearchInputChange}
          value={searchInput}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </header>
      <hr />
      <h2>Categories:</h2>
      <Navbar />
      <Product data={searchResults.length > 0 ? searchResults : fetchedData} />
    </>
  );
}