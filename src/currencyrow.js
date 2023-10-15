// CurrencyRow.js
import React from 'react';

function CurrencyRow({ name, exchangeRate, weBuy, weSell }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{exchangeRate}</td>
      <td>{weBuy.toFixed(4)}</td>
      <td>{weSell.toFixed(4)}</td>
    </tr>
  );
}

export default CurrencyRow;
