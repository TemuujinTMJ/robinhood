"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { QuizGet } from "@/services/modules/quiz/quizGet.service";
import { Result } from "@/types/types";
import { useEffect, useState } from "react";

const QuizRender = ({ id }: { id: number }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const dispatch = useAppDispatch();
  const { quiz, getQuizloading } = useAppSelector((state) => state.GetQuiz);

  useEffect(() => {
    dispatch(QuizGet({ id }));
  }, []);
  const handleOptionClick = (points: number) => {
    const newTotalPoints = totalPoints + points;
    setTotalPoints(newTotalPoints);

    if (currentQuestionIndex < (quiz?.questions || []).length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newTotalPoints);
    }
  };

  const calculateResult = (points: number) => {
    quiz?.results.map((e) => {
      if (points >= e.point_range[0] && points <= e.point_range[1]) {
        setResult(e);
      }
    });
  };
  if (getQuizloading) return null;
  if (result) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="bg-glass backdrop-blur-lg p-10 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-left">
              Баяр хүргэе! <br />
              Танд <span className="text-green-400">{result.name}</span> хийх нь
              илүү тохиромжтой!
            </h2>
            <div className="flex gap-8 flex-wrap md:flex-nowrap">
              <div className="bg-glass shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 min-w-[300px]">
                <h2 className="text-xl font-semibold mb-2">{result.name}</h2>
                <p>{result.result}</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  mt-8">
      <h1 className="text-3xl font-semibold  mb-6 text-center">{quiz?.name}</h1>
      <div className="bg-glass backdrop-blur-lg p-10 rounded-lg shadow-xl max-w-lg relative">
        <div>
          <h2 className="text-xl font-medium mb-4">
            {quiz?.questions[currentQuestionIndex].question}
          </h2>
          {quiz?.questions[currentQuestionIndex].answers.map(
            (option, index) => (
              <button
                key={index}
                className="w-full bg-white/20 text-left hover:bg-green-400 py-2 px-4 rounded-md mb-3 shadow-md transition-colors duration-300"
                onClick={() => [handleOptionClick(option.point)]}
              >
                {option.answer}
              </button>
            )
          )}
        </div>
        <div className="absolute right-4 bottom-2">
          {(quiz?.questions.indexOf(quiz.questions[currentQuestionIndex]) ||
            0) + 1}
          /{quiz?.questions.length}
        </div>
      </div>
    </div>
  );
};

export default QuizRender;
