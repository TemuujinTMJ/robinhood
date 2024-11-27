"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetPipPairList } from "@/services/modules/user/pip-calculator/getPipCurrencyPair.service";
import { Spin } from "antd";
import { useEffect, useState } from "react";

const PipCalculatorForm = () => {
  const dispatch = useAppDispatch();
  const { loadingPipPairs, pipPairs } = useAppSelector(
    (state) => state.GetPipPairs
  );

  const [currencyPairsWithCoefficients, setCurrencyPairsWithCoefficients] =
    useState<{ [key: string]: number }>({});
  const [pair, setPair] = useState();
  const [accountSize, setAccountSize] = useState<number>(1);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [slValue, setSlValue] = useState<number>(1);
  const [tpValue, setTpValue] = useState<number>(1);
  const [lotSize, setLotSize] = useState<number>(0);
  const [riskAmount, setRiskAmount] = useState<number>(0);
  const [potentialProfit, setPotentialProfit] = useState<number>(0);
  const [riskRewardRatio, setRiskRewardRatio] = useState<number>(0);
  const [balanceAfterLoss, setBalanceAfterLoss] = useState<number>(0);
  useEffect(() => {
    dispatch(GetPipPairList())
      .unwrap()
      .then((data) => {
        setCurrencyPairsWithCoefficients(data.currencies);
        setPair(data.currencies[0]);
      })
      .catch((err) => {
        console.error("Error fetching pip pairs:", err);
      });
  }, [dispatch]);

  const handleCalculate = () => {
    //@ts-expect-error
    const coefficient = currencyPairsWithCoefficients[pair] || 1;
    const riskAmountCalc = (riskPercent / 100) * accountSize;
    const lotSizeCalc = riskAmountCalc / (slValue * coefficient);
    const potentialProfitCalc = lotSizeCalc * tpValue * coefficient;
    const riskRewardRatioCalc = potentialProfitCalc / riskAmountCalc;

    setLotSize(lotSizeCalc);
    setRiskAmount(riskAmountCalc);
    setPotentialProfit(potentialProfitCalc);
    setRiskRewardRatio(riskRewardRatioCalc);
    setBalanceAfterLoss(accountSize - riskAmountCalc);
  };

  return (
    <Container>
      <div className="bg-gray-900 py-12 px-4 flex items-center justify-center flex-col">
        <div className="bg-glass backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[800px]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              LOT Size тооцоолуур
            </h1>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                Хослол
              </label>
              {loadingPipPairs ? (
                <Spin />
              ) : (
                <select
                  value={pair}
                  //@ts-expect-error
                  onChange={(e) => setPair(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border-none bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  {pipPairs && Object.keys(pipPairs).map(
                    (asset, index) => (
                      <option key={index} value={asset}>
                        {asset}
                      </option>
                    )
                  )}
                </select>
              )}
            </div>

            {/* Account Size Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                Дансны үлдэгдэл / $ /
              </label>
              <input
                type="number"
                value={accountSize}
                onChange={(e) =>
                  setAccountSize(parseFloat(e.target.value) || 0)
                }
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter Account Size"
              />
            </div>

            {/* Risk Percentage Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                Эрсдэл / % /
              </label>
              <input
                type="number"
                value={riskPercent}
                onChange={(e) =>
                  setRiskPercent(parseFloat(e.target.value) || 0)
                }
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter Risk Percentage"
              />
            </div>

            {/* SL Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                SL Тавих зай /pips/
              </label>
              <input
                type="number"
                value={slValue}
                onChange={(e) => setSlValue(parseFloat(e.target.value) || 0)}
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter SL Pip Range"
              />
            </div>

            {/* TP Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">
                TP Тавих зай /pips/
              </label>
              <input
                type="number"
                value={tpValue}
                onChange={(e) => setTpValue(parseFloat(e.target.value) || 0)}
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                placeholder="Enter TP Pip Range"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Тооцоолох
            </button>
          </div>

          {/* Results Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Үр дүн
            </h2>

            <div className="space-y-4">
              {[
                { label: "Lot хэмжээ", value: lotSize.toFixed(2) },
                { label: "Эрсдэл / $ /", value: riskAmount.toFixed(2) },
                {
                  label: "Алдагдал хүлээх дансны үлдэгдэл / $ /",
                  value: balanceAfterLoss.toFixed(2),
                },
                {
                  label: "Боломжит ашиг / $ /",
                  value: potentialProfit.toFixed(2),
                },
                {
                  label: "Эрсдэл ашигийн харьцаа / RR /",
                  value: `1 / ${riskRewardRatio.toFixed(2)}`,
                },
              ].map((result, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-md">
                  <p className="font-bold">
                    {result.label}: <br />
                    <span className="text-green-400">{result.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PipCalculatorForm;
