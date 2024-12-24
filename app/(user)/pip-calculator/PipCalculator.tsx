"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetPipPairList } from "@/services/modules/user/pip-calculator/getPipCurrencyPair.service";
import { Button, Form, Input, Spin } from "antd";
import { useEffect, useState } from "react";

const PipCalculatorForm = () => {
  const dispatch = useAppDispatch();
  const { loadingPipPairs, pipPairs } = useAppSelector(
    (state) => state.GetPipPairs
  );

  const [currencyPairsWithCoefficients, setCurrencyPairsWithCoefficients] =
    useState<{ [key: string]: number }>({});
  const [pair, setPair] = useState();
  const [results, setResults] = useState({
    lotSize: 0,
    riskAmount: 0,
    potentialProfit: 0,
    riskRewardRatio: 0,
    balanceAfterLoss: 0,
  });

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

  const handleCalculate = (values: any) => {
    const { accountSize, riskPercent, slValue, tpValue } = values;
    //@ts-expect-error
    const coefficient = currencyPairsWithCoefficients[pair] || 1;
    const riskAmountCalc = (riskPercent / 100) * accountSize;
    const lotSizeCalc = riskAmountCalc / (slValue * coefficient);
    const potentialProfitCalc = lotSizeCalc * tpValue * coefficient;
    const riskRewardRatioCalc = potentialProfitCalc / riskAmountCalc;

    setResults({
      lotSize: lotSizeCalc,
      riskAmount: riskAmountCalc,
      potentialProfit: potentialProfitCalc,
      riskRewardRatio: riskRewardRatioCalc,
      balanceAfterLoss: accountSize - riskAmountCalc,
    });
  };

  return (
    <Container>
      <div className="bg-gray-900 py-12 px-4 flex items-center justify-center flex-col">
        <div className="bg-glass backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px]">
          <Form layout="vertical" onFinish={handleCalculate}>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              LOT Size тооцоолуур
            </h1>
            {/* Currency Pair Selector */}
            <Form.Item
              label="Хослол"
              name="pair"
              rules={[{ required: true, message: "Хослол сонгоно уу!" }]}
            >
              {loadingPipPairs ? (
                <Spin />
              ) : (
                <select
                  value={pair}
                  //@ts-expect-error
                  onChange={(e) => setPair(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border-none bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  {pipPairs &&
                    Object.keys(pipPairs).map((asset, index) => (
                      <option key={index} value={asset}>
                        {asset}
                      </option>
                    ))}
                </select>
              )}
            </Form.Item>

            {/* Account Size Input */}
            <Form.Item
              label="Дансны үлдэгдэл / $ /"
              name="accountSize"
              rules={[
                { required: true, message: "Дансны үлдэгдэл оруулна уу!" },
              ]}
            >
              <Input
                type="number"
                placeholder="Enter Account Size"
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
              />
            </Form.Item>

            {/* Risk Percentage Input */}
            <Form.Item
              label="Эрсдэл / % /"
              name="riskPercent"
              rules={[
                { required: true, message: "Эрсдэлийн хувийг оруулна уу!" },
              ]}
            >
              <Input
                type="number"
                placeholder="Enter Risk Percentage"
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
              />
            </Form.Item>

            {/* SL Input */}
            <Form.Item
              label="SL Тавих зай /pips/"
              name="slValue"
              rules={[{ required: true, message: "SL зайг оруулна уу!" }]}
            >
              <Input
                type="number"
                placeholder="Enter SL Pip Range"
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
              />
            </Form.Item>

            {/* TP Input */}
            <Form.Item
              label="TP Тавих зай /pips/"
              name="tpValue"
              rules={[{ required: true, message: "TP зайг оруулна уу!" }]}
            >
              <Input
                className="mt-1 block w-full px-3 py-2 border-none rounded-md text-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-gray-800 text-white"
                type="number"
                placeholder="Enter TP Pip Range"
              />
            </Form.Item>

            {/* Calculate Button */}
            <Form.Item>
              <Button
                type="primary"
                className="bg-green-500"
                htmlType="submit"
                block
                size="large"
              >
                Тооцоолох
              </Button>
            </Form.Item>
          </Form>

          {/* Results Section */}
          <div className="">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Үр дүн
            </h2>
            <div className="space-y-7">
              {[
                { label: "Lot хэмжээ", value: results.lotSize.toFixed(2) },
                { label: "Эрсдэл / $ /", value: results.riskAmount.toFixed(2) },
                {
                  label: "Алдагдал хүлээх дансны үлдэгдэл / $ /",
                  value: results.balanceAfterLoss.toFixed(2),
                },
                {
                  label: "Боломжит ашиг / $ /",
                  value: results.potentialProfit.toFixed(2),
                },
                {
                  label: "Эрсдэл ашигийн харьцаа / RR /",
                  value: `1 / ${results.riskRewardRatio.toFixed(2)}`,
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
