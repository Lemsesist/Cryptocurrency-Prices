import React, { useState } from "react";
import Tooltip from "react-tooltip";

export const CryptoItem = ({ crypto }) => {
  const [open, setOpen] = useState(false);
  const isPositive = crypto.percent_change_24h > 0;

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <h2>{crypto.symbol}</h2>
        <p>{crypto.name}</p>
        <p>Price (USD): ${crypto.price_usd}</p>
        <p style={{ color: isPositive ? "green" : "red" }}>
          Change (24h): {crypto.percent_change_24h}%
        </p>
      </div>
      {open && (
        <div>
          <p>Price (BTC): {crypto.price_btc}</p>
          <p>
            Market Cap (USD): ${crypto.market_cap_usd}
            <span data-tip="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price.">
              ℹ
            </span>
            <Tooltip />
          </p>
        </div>
      )}
    </div>
  );
};
