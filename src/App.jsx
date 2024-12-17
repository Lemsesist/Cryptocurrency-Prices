import React, { useState, useEffect } from "react";
import { CryptoList } from "./CryptoList.jsx";
import { SearchBar } from "./SearchBar.jsx";

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCryptos = async () => {
    setLoading(true);
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    const data = await response.json();
    setCryptos(data.data);
    setFilteredCryptos(data.data);
    setLoading(false);
  };

  const handleSearch = (query) => {
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={fetchCryptos}>Refresh</button>
      {loading ? <p>Loading...</p> : <CryptoList cryptos={filteredCryptos} />}
    </div>
  );
};

export default App;
