import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/index.js';
import Button from './components/Button/index.js';
import CryptoCard from './components/CryptoCard/index.js';
import './App.css';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCryptoData(data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Cryptocurrency Prices</h1>
      <Button onClick={fetchData} text="Update" />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="crypto-list">
          {filteredData.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
