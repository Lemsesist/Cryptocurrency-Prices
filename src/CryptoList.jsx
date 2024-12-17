import React from "react";
import { CryptoItem } from "./CryptoItem";

export const CryptoList = ({ cryptos }) => {
  return (
    <div>
      {cryptos.map((crypto) => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};
