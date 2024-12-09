"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { QuizGet } from "@/services/modules/quiz/quizGet.service";
import { Result } from "@/types/types";
import { useEffect, useState } from "react";

type Question = {
  question: string;
  options: { text: string; points: number }[];
  index: number;
};

const questions: Question[] = [
  {
    index: 1,
    question: "Амралтын өдрөө хэрхэн төлөвлөдөг вэ?",
    options: [
      { text: "A) Цаг минут бүрийг төлөвлөх дуртай", points: 1 },
      {
        text: "B) Ерөнхийд нь төлөвлөж, гэнэтийн явдлуудад орон зай үлдээх дуртай",
        points: 2,
      },
      {
        text: "C) Тайван өнгөрүүлж, урсгалаар нь өрнүүлэхийг илүүд үздэг",
        points: 3,
      },
    ],
  },
  {
    index: 2,
    question: "Чухал зүйл худалдан авахдаа хэрхэн шийдвэр гаргадаг вэ?",
    options: [
      {
        text: "A) Таалагдснаа хараад л худалдаж авах нь амар байдаг",
        points: 1,
      },
      {
        text: "B) Бага зэрэг судалгаа хийж, шалгаж үзчихээд сэтгэлд нийцэж байгаа эсэхийг шалгадаг",
        points: 2,
      },
      {
        text: "C) Олон газруудын үнэ, чанар, сэтгэгдэл, үйлчилгээ зэргийг сайтар бодож байж шийдвэр гаргадаг",
        points: 3,
      },
    ],
  },
  {
    index: 3,
    question: "Өдрийн турш утсаа хэр давтамжтай оролддог вэ?",
    options: [
      {
        text: "A) Мэдээ, шинэчлэлтийг хамгийн түрүүнд олж мэдсэн хүнд хамгийн өгөөжтэй гэж боддог учир байнга оролддог",
        points: 1,
      },
      {
        text: "B) Тогтмол оролддог ч өөрт хэрэгтэй төрлийн мэдээллийг л шалгадаг",
        points: 2,
      },
      {
        text: "C) Дуугарвал шалгана, утас оролдоод байх шаардлага гардаггүй",
        points: 3,
      },
    ],
  },
  {
    index: 4,
    question: "Аялал хийхдээ ямар аяллын хөтөлбөрийг илүүд үздэг вэ?",
    options: [
      {
        text: "A) Завгүй, байнгын үйл ажиллагаатай байвал сонирхолтой",
        points: 1,
      },
      {
        text: "B) Идэвхтэй үйл ажиллагаа болон амралтын цаг нь тэнцвэртэй хөтөлбөрийг илүүд үздэг",
        points: 2,
      },
      {
        text: "C) Цөөн үйл ажиллагаатай тайван хөтөлбөртэй аялалд дуртай",
        points: 3,
      },
    ],
  },
  {
    index: 5,
    question: "Өдөр тутмын ажилдаа хэрхэн ханддаг вэ?",
    options: [
      {
        text: "A) Ямар ч ажлыг хурдан чанартай дуусгаж, үр дүнг нь дор нь мэдрэхийг хүсдэг",
        points: 1,
      },
      {
        text: "B) Нэг ажлыг тогтмол хийж, дадал болгон өөрийгөө сайжруулах дуртай",
        points: 2,
      },
      {
        text: "C) Урт хугацаанд тогтвортой ахиц гаргаж, том зорилго тавьж ажиллах дуртай",
        points: 3,
      },
    ],
  },
  {
    index: 6,
    question: "Найз нөхөдөө сонгоход хэрхэн ханддаг вэ?",
    options: [
      {
        text: "A) Хүмүүстэй амархан дотносдог, нийтэч, чөлөөтэй хүмүүстэй амархан эвээ олдог",
        points: 1,
      },
      {
        text: "B) Хүмүүстэй тогтмол уулзаж, сайтар таньж байж найз гэж дүгнэх эсэхээ шийддэг",
        points: 2,
      },
      {
        text: "C) Урт хугацааны турш харьцаж байж нэг нэгнээ гүнзгий таньсны эцэст найз болдог гэж боддог",
        points: 3,
      },
    ],
  },
  {
    index: 7,
    question: "Найз нөхөдтэйгөө цагийг өнгөрөөхдөө ямар зүйлс хийх дуртай вэ?",
    options: [
      {
        text: "A) Хурдан хэмнэлтэй тоглоом тоглох, байгаа зүйлүүдээрээ  тоглоом зохиож цагийг зугаатай өнгөрөөх дуртай",
        points: 1,
      },
      {
        text: "B) Санамсаргүй цугласан хэдтэйгээ таатай нөхцөл бүрдвэл тоглоод суух нь таалагдааг",
        points: 2,
      },
      {
        text: "C) Эртнээс төлөвлөж найзуудаараа цаг гаргаж уулзаж зугаацах дуртай",
        points: 3,
      },
    ],
  },
  {
    index: 8,
    question: "Амьдралд эрсдэл гаргахад хэрхэн ханддаг вэ?",
    options: [
      {
        text: "A) Эрсдэл өндөр байвал шагнал нь өндөр байна. Тиймээс боломж олдвол татгалзахгүй",
        points: 1,
      },
      {
        text: "B) Боломж гарсан үед өөрийгөө хохироохгүй хэмжээний тооцоотой эрсдэл гаргадаг",
        points: 2,
      },
      {
        text: "C) Би ерөнхийдөө эрсдэлээс зайлсхийж, тогтвортой хандахыг илүүд үздэг",
        points: 3,
      },
    ],
  },
  {
    index: 9,
    question: "Стрессд орох үед хэрхэн хариу үйлдэл үзүүлдэг вэ?",
    options: [
      {
        text: "A) Би хурдан шийдвэр гаргаж, дарамтанд ажиллах дуртай ",
        points: 1,
      },
      {
        text: "B) Стресстэй байдалд хүлээцтэй хандаж, асуудлыг хурдан шийдэхийг хүсдэг",
        points: 2,
      },
      {
        text: "C) Тайван байж, асуудал үүсгэсэн шалтгаан хүртэл нь шийдэхийг хүсдэг",
        points: 3,
      },
    ],
  },
  {
    index: 10,
    question:
      "Ажлаа шөнө эсвэл ажлын цагаас гадуур хийхийг хэрхэн хүлээж авдаг вэ?",
    options: [
      { text: "A) Шөнөөр хийхгүйн тулд гялс дуусгахыг илүүд үздэг", points: 1 },
      {
        text: "B) Заримдаа шаардлагатай бол орой хүртэл ажиллахад дургүйцдэггүй",
        points: 2,
      },
      {
        text: "C) Би маргааш болтол ажлаа хойшлуулж, тайван ажиллахыг хүсдэг",
        points: 3,
      },
    ],
  },
];

const QuizRender = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const dispatch = useAppDispatch();
  const { quiz, getQuizloading } = useAppSelector((state) => state.GetQuiz);

  useEffect(() => {
    dispatch(QuizGet({ id: 14 }));
  }, []);
  const handleOptionClick = (points: number) => {
    const newTotalPoints = totalPoints + points;
    setTotalPoints(newTotalPoints);

    if (currentQuestionIndex < questions.length - 1) {
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
              Танд <span className="text-green-400">{result.name}</span> хийх нь илүү
              тохиромжтой!
            </h2>
            <div className="flex gap-8 flex-wrap md:flex-nowrap">
              <div className="bg-glass shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 min-w-[300px]">
                <h2 className="text-xl font-semibold mb-2">{result.name}</h2>
                <p>
                  {result.result}
                </p>
              </div>
              <p>
              </p>
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
