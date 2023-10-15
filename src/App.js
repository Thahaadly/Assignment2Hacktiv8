import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './currencyrow';

const API_KEY = '1ae15e36f1f242e9ad0f99fde274cdb9';

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch(
        `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`
      );

      const data = await response.json();
      const rates = data.rates;

      const currenciesData = [
        { name: 'CAD', exchangeRate: rates.CAD, weBuy: rates.CAD * 1.05, weSell: rates.CAD * 0.95 },
        { name: 'IDR', exchangeRate: rates.IDR, weBuy: rates.IDR * 1.05, weSell: rates.IDR * 0.95 },
        { name: 'JPY', exchangeRate: rates.JPY, weBuy: rates.JPY * 1.05, weSell: rates.JPY * 0.95 },
        { name: 'CHF', exchangeRate: rates.CHF, weBuy: rates.CHF * 1.05, weSell: rates.CHF * 0.95 },
        { name: 'EUR', exchangeRate: rates.EUR, weBuy: rates.EUR * 1.05, weSell: rates.EUR * 0.95 },
        { name: 'GBP', exchangeRate: rates.GBP, weBuy: rates.GBP * 1.05, weSell: rates.GBP * 0.95 },
      ];

      setCurrencies(currenciesData);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  return (
    <div className="App">
      <h1>Currency Rates</h1>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Exchange Rate</th>
            <th>We Buy</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <CurrencyRow
              key={currency.name}
              name={currency.name}
              exchangeRate={currency.exchangeRate}
              weBuy={currency.weBuy}
              weSell={currency.weSell}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

 



