"use client";
import { useState } from 'react';

const currencyPairs = [
  'EUR/USD', 'GBP/USD', 'USD/CHF', 'USD/CAD', 'USD/JPY', 'NZD/USD',
  'AUD/USD', 'EUR/AUD', 'EUR/GBP', 'EUR/JPY', 'EUR/CAD', 'EUR/CHF',
  'EUR/NZD', 'GBP/CAD', 'GBP/CHF', 'GBP/JPY', 'GBP/AUD', 'GBP/NZD',
  'AUD/CAD', 'AUD/JPY', 'AUD/CHF', 'AUD/NZD', 'CHF/JPY', 'CAD/CHF',
  'CAD/JPY', 'NZD/CHF', 'NZD/JPY', 'NZD/CAD',
];

const PipCalculatorForm = () => {
  const [pair, setPair] = useState<string>('EUR/USD');
  const [slType, setSlType] = useState<'pips' | 'price'>('pips');
  const [slValue, setSlValue] = useState<number | string>('');
  const [openPrice, setOpenPrice] = useState<number | string>('');
  const [accountSize, setAccountSize] = useState<number | string>('');
  const [riskPercent, setRiskPercent] = useState<number | string>('');
  const [lotSize, setLotSize] = useState<number | null>(null);

  const handleCalculate = () => {
    let slAmount: number;

    if (slType === 'pips') {
      slAmount = Number(slValue) * (pair === 'USD/JPY' ? 0.01 : 0.0001);
    } else {
      slAmount = Math.abs(Number(openPrice) - Number(slValue));
    }

    const riskAmount = (Number(riskPercent) / 100) * Number(accountSize);
    const calculatedLotSize = riskAmount / (slAmount * (pair === 'USD/JPY' ? 100 : 10));
    setLotSize(calculatedLotSize);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-glass backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-white">SL Lot Size Calculator</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Currency Pair</label>
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-none bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            {currencyPairs.map((asset, index) => (
              <option key={index} value={asset}>{asset}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Stop-Loss Type</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setSlType('pips')}
              className={`py-2 px-4 rounded-md text-sm font-medium ${slType === 'pips' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Pips
            </button>
            <button
              onClick={() => setSlType('price')}
              className={`py-2 px-4 rounded-md text-sm font-medium ${slType === 'price' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Price
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">{slType === 'pips' ? 'SL Pip Range' : 'SL Price'}</label>
          <input
            type="number"
            value={slValue}
            onChange={(e) => setSlValue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
            placeholder={slType === 'pips' ? 'Enter Pips' : 'Enter SL Price'}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Open Price</label>
          <input
            type="number"
            value={openPrice}
            onChange={(e) => setOpenPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
            placeholder="Enter Open Price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Account Size</label>
          <input
            type="number"
            value={accountSize}
            onChange={(e) => setAccountSize(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
            placeholder="Enter Account Size"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Risk Percentage (%)</label>
          <input
            type="number"
            value={riskPercent}
            onChange={(e) => setRiskPercent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
            placeholder="Enter Risk Percentage"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Calculate Lot Size
        </button>

        {lotSize !== null && (
          <div className="mt-4 bg-gray-800 p-4 rounded-md">
            <p className="text-lg font-bold text-green-400">Calculated Lot Size: {lotSize.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PipCalculatorForm;