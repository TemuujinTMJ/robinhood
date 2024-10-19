"use client";
import { useState } from "react";
import Container from "./container";

const currencyPairsWithCoefficients: { [key: string]: number } = {
  "AUD/CAD": 7.26,
  "AUD/CHF": 11.66,
  "AUD/NZD": 6.1,
  "AUD/USD": 10,
  "CAD/CHF": 11.66,
  "CAD/JPY": 6.71,
  "CHF/JPY": 6.71,
  "EUR/AUD": 6.74,
  "EUR/CAD": 7.26,
  "EUR/CHF": 11.66,
  "EUR/GBP": 13.07,
  "EUR/JPY": 6.71,
  "EUR/NZD": 6.1,
  "EUR/USD": 10,
  "GBP/AUD": 6.74,
  "GBP/CAD": 7.26,
  "GBP/CHF": 11.66,
  "GBP/JPY": 6.71,
  "GBP/NZD": 6.1,
  "GBP/USD": 10,
  "NZD/CAD": 7.26,
  "NZD/CHF": 11.26,
  "NZD/USD": 10,
  "USD/CAD": 7.26,
  "USD/CHF": 11.66,
  "USD/JPY": 6.71,
  "XAU/USD": 10,
  US30: 1,
  NAS100: 1,
};

const PipCalculatorForm = () => {
  const [pair, setPair] = useState<string>("EUR/USD");
  const [accountSize, setAccountSize] = useState<number | string>("");
  const [riskPercent, setRiskPercent] = useState<number | string>("");
  const [slValue, setSlValue] = useState<number | string>("");
  const [tpValue, setTpValue] = useState<number | string>("");
  const [lotSize, setLotSize] = useState<number | null>(null);
  const [riskAmount, setRiskAmount] = useState<number | null>(null);
  const [potentialProfit, setPotentialProfit] = useState<number | null>(null);
  const [riskRewardRatio, setRiskRewardRatio] = useState<number | null>(null);
  const [balanceAfterLoss, setBalanceAfterLoss] = useState<number | null>(null);

  const handleCalculate = () => {
    const coefficient = currencyPairsWithCoefficients[pair] || 1;
    const slAmount = (Number(accountSize) * Number(riskPercent)) / 100;
    const riskAmountCalc = (Number(riskPercent) / 100) * Number(accountSize);
    const lotSizeCalc = slAmount / (Number(slValue) * coefficient);

    const potentialProfitCalc = lotSizeCalc * Number(tpValue) * coefficient;
    const riskRewardRatioCalc = potentialProfitCalc / riskAmountCalc;

    setLotSize(lotSizeCalc);
    setRiskAmount(riskAmountCalc);
    setPotentialProfit(potentialProfitCalc);
    setRiskRewardRatio(riskRewardRatioCalc);
    setBalanceAfterLoss(Number(accountSize) - riskAmountCalc);
  };

  return (
    <Container>
      <div className="bg-gray-900 py-12 px-4 flex items-center justify-center flex-col ">
        <div className="bg-glass backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[800px]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              SL Lot Size Calculator
            </h1>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                Currency Pair
              </label>
              <select
                value={pair}
                onChange={(e) => setPair(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-none bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                {Object.keys(currencyPairsWithCoefficients).map(
                  (asset, index) => (
                    <option key={index} value={asset}>
                      {asset}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                Account Size
              </label>
              <input
                type="number"
                value={accountSize}
                onChange={(e) => setAccountSize(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter Account Size"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                Risk Percentage (%)
              </label>
              <input
                type="number"
                value={riskPercent}
                onChange={(e) => setRiskPercent(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter Risk Percentage"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                SL Pip Range
              </label>
              <input
                type="number"
                value={slValue}
                onChange={(e) => setSlValue(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter SL Pip Range"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                TP Pip Range
              </label>
              <input
                type="number"
                value={tpValue}
                onChange={(e) => setTpValue(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter TP Pip Range"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Calculate Lot Size
            </button>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Results
            </h2>

            {lotSize !== null && (
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-md">
                  <p className="text-lg font-bold text-green-400">
                    Calculated Lot Size: {lotSize.toFixed(2)}
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-md">
                  <p className="text-lg font-bold text-green-400">
                    Risk Amount: {riskAmount?.toFixed(2)} USD
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-md">
                  <p className="text-lg font-bold text-green-400">
                    Balance After Loss: {balanceAfterLoss?.toFixed(2)} USD
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-md">
                  <p className="text-lg font-bold text-green-400">
                    Potential Profit: {potentialProfit?.toFixed(2)} USD
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-md">
                  <p className="text-lg font-bold text-green-400">
                    Risk-Reward Ratio: 1/{riskRewardRatio?.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-gray-200 max-w-3xl text-sm sm:text-base flex gap-4">
          <p className="bg-glass p-4 rounded-md">
            Арилжаанд орохдоо учрах эрсдэлийг тооцоолох нь нэн тэргүүнд хийгдэх
            ёстой ажил байна. Харин эрсдэлээ тооцож байх хооронд арилжааны
            боломжоо алдвал хайран гэдгийг бүх арилжаачид мэдэх юм.
          </p>
          <p className="bg-glass p-4 rounded-md">
            Манай тооцоолуур нь түгээмэл ашиглагддаг 23 хослол дээр ажиллах
            бөгөөд түргэн шуурхай зорилтот эрсдэл дээр тань оролт хийх Lot-ны
            хэмжээг тооцоолж өгөх болно. Танд амжилт хүсье!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PipCalculatorForm;
