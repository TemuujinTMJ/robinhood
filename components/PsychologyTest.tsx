"use client";
import { useState } from "react";

type Question = {
  question: string;
  options: { text: string; points: number }[];
};

const questions: Question[] = [
  {
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

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const[currentIndex, setCurrentIndex] = useState(0)

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
    if (points >= 10 && points <= 14) {
      setResult("Scalper");
    } else if (points >= 15 && points <= 22) {
      setResult("Day Trader");
    } else if (points >= 23 && points <= 30) {
      setResult("Swing Trader");
    }
  };

  if (result) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="bg-glass backdrop-blur-lg p-10 rounded-lg shadow-xl max-w-[800px]">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Таны арилжааны хэв маяг: <span className="text-green-400">{result}</span>
          </h2>
          <p>
            {result === "Scalper" &&
              "Хурдтай орчинд та амжилттай ажилладаг, таны түргэн шийдвэр гаргах чадвар нь scalping арилжаанд тохиромжтой. Энэ арилжааны хэв маяг нь хурд, нарийвчлал, зах зээлийн жижиг боловч тогтмол боломжуудыг ашиглахад оршино. Та богино хугацаанд олон арилжаа хийхэд дуртай бөгөөд аливаа зүйлийг хурдан ойлгож шийдвэрлэх чадвар тань таны хамгийн том давуу тал байх болно. Скалперийн хувьд та богино хугацааны үнийн өөрчлөлтийг таньж мэдэх, хурдан арилжаа хийх ур чадвараа хөгжүүлнэ. Энэ нь сахилга бат, анхаарал төвлөрөл, зах зээлд байнга анхаарал тавихыг шаарддаг. Scalping-н хэмнэл нь хурдаг байж болох ч, таны стратеги хурц, сахилга бат байвал амжилт хурдан ирэх боломжтой. Өнөөдөр Scalping-н ертөнцийг судалж эхлээрэй! Энэ бол үнийн богино хэмжээний өөрчлөлтүүдээс ашиг хүртэх дуртай хүмүүст төгс арилжааны хэв маяг юм."}
            {result === "Day Trader" &&
              "Та тогтсон дэг журамтай ажиллах дуртай бөгөөд үүний хажуугаар аливаа нөхцөл байдалд бага зэрэг уян хатан ханддаг. Өдрийн арилжаачны хувьд та өдрийн зах зээлийн хөдөлгөөн дундаас боломжийг олж харах болно. Та өдөр бүрийн үнийн хэлбэлзэлд суурилсан шинжилгээгээр арилжаа хийх тул шөнөөр захиалгаа барьж сэтгэлээ түгшээхгүй зайлсхийж чадна. Таны төвлөрөл, шийдэмгий зан, богино хугацааны төлөвлөгөө боловсруулах чадвар тань энэ арилжааны хэв маягт хамгийн тохиромжтой. Техник болон бодит цагийн мэдээлэлд тулгуурлан зах зээлийн хэлбэлзлийг ашиглан арилжаа хийдэг. Өдрийн арилжаачид өдөр бүр шинэ боломжийг хардаг бөгөөд та зах зээлийн тухайн өдрийн чиг хандлагад уялдуулан захиалгаа өгнө. Энэ стратеги нь танд өдөр бүр арилжаа хийх боломжийг олгох хэдий ч, таны хүлээж буй нөхцөл бүрдэхгүй үед зах зээлээс бага зэрэг холдох цагийг олгоно. Өнөөдрөөс эхлэн өдрийн арилжаанд орж, өдөр бүр зах зээлийг ажиглаж эхлээрэй."}
            {result === "Swing Trader" &&
              "Тэвчээр, урт хугацааны алсын хараа бол таны хамгийн том хүч бөгөөд танд swing арилжааны хэв маягт тохиромжтойг илтгэнэ. Та зах зээлийг томоор хар, удаан хугацааны хөдөлгөөнд суурилсан арилжааг хэд хоног, эсвэл бүр хэдэн долоо хоногийн турш барихыг илүүд үздэг. Swing арилжаачид өдөр тутмын үнийн хэлбэлзлээс зайлсхийж, томоохон өөрчлөлтүүд дээр тулгуурлан шийдвэр гаргах нөхцлийг эрдэг. Swing арилжаачны хувьд та дэлгэцээсээ хөндийрч, зах зээл таны хүлээсэн цэг дээр очих боломжийг өгч, чиг хандлагыг нь ажиглан арилжааны төлөвлөгөөгөө гаргана. Энэ арилжааны хэв маяг нь, техник болон суурь шинжилгээнд тулгуурлан тооцоолсон тайван шийдвэр гаргахад үндэслэнэ. Хэрэв та арилжаанд илүү тогтвортой, тайван хандлага барихыг хүсдэг бол Swing арилжаа танд тохирно. Өнөөдрөөс эхлэн swing арилжааны ертөнцөд орж, зах зээлийн томоохон хөдөлгөөнийг барьж аваарай."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-glass backdrop-blur-lg p-10 rounded-lg shadow-xl max-w-lg relative">
        <h1 className="text-3xl font-semibold  mb-6 text-center">
          Арилжааны хэв маягийг тодорхойлох тест
        </h1>
        <div>
          <h2 className="text-xl font-medium mb-4">
            {questions[currentQuestionIndex].question}
          </h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className="w-full bg-white/20 backdrop-blur-md text-left hover:bg-green-400 py-2 px-4 rounded-md mb-3 shadow-md transition-colors duration-300"
              onClick={() => [handleOptionClick(option.points), setCurrentIndex(index)]}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="absolute right-4 bottom-2">{currentIndex + 1}/{questions.length}</div>
      </div>
    </div>
  );
};

export default QuizComponent;