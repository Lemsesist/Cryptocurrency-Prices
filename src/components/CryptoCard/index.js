import React, { useState } from 'react';
import './index.css';

const CryptoCard = ({ crypto }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="crypto-card">
      <div className="crypto-header" onClick={() => setIsExpanded(!isExpanded)}>
        <span>{crypto.name}</span>
        <span className="expand-icon">{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="crypto-details">
          <p>Symbol: {crypto.symbol}</p>
          <p>Price in USD: ${crypto.price_usd}</p>
          <p>Price in BTC: {crypto.price_btc}</p>
          <p>
            Market Cap (USD):{' '}
            <span className="tooltip">
              {crypto.market_cap_usd}
              <span className="tooltip-text">
                The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price
              </span>
            </span>
          </p>
          <p>
            24h Change:{' '}
            <span
              style={{
                color: crypto.percent_change_24h >= 0 ? 'green' : 'red',
              }}
            >
              {crypto.percent_change_24h}%
            </span>
          </p>
        </div>
      )}
    </li>
  );
};

export default CryptoCard;
