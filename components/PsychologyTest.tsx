"use client";
import { useState } from "react";

export default function PsychologyTest() {
  const questions = [
    {
      question: "How do you handle stress?",
      options: ["I stay calm", "I get anxious", "I ignore it", "I seek help"],
    },
    {
      question: "How do you make decisions?",
      options: [
        "I analyze everything",
        "I go with my gut",
        "I ask for advice",
        "I hesitate",
      ],
    },
    {
      question: "What motivates you?",
      options: ["Success", "Passion", "Security", "Recognition"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const getResult = () => {
    const mostCommonAnswer = answers
      .sort(
        (a, b) =>
          answers.filter((v) => v === a).length -
          answers.filter((v) => v === b).length
      )
      .pop();
    return `Your personality is driven by: ${mostCommonAnswer}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="bg-glass backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Psychology Test</h2>
        {!showResult ? (
          <>
            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl text-white mb-6">{getResult()}</p>
            <button
              onClick={restartTest}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Restart Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
