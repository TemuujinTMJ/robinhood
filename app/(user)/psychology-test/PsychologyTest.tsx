"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetAdminQuizList } from "@/services/modules/admin/quiz/getQuizList.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const QuizComponent = () => {
  const { getQuizloading, quiz } = useAppSelector((state) => state.GetQuizList);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAdminQuizList({ page_size: 10, page_number: 1 }));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 items-center justify-center">
        {!getQuizloading &&
          quiz?.map((e) => (
            <div
              key={e.id}
              className="bg-glass self-center justify-self-center h-full backdrop-blur-md p-8 rounded-lg text-center shadow-lg hover:shadow-2xl transition duration-300 flex flex-col w-full max-w-[400px] justify-between"
            >
              <div>
                <Image
                  src={e.image_path}
                  width={400}
                  height={100}
                  alt="tn"
                  className="rounded"
                />
                <h3 className="text-xl font-semibold mb-4">{e.name}</h3>
                <p>{e.description}</p>
              </div>
              <button
                disabled={!e.is_visible}
                className="bg-gray-600 text-white py-2 px-4 rounded  transition duration-300 mt-4"
                onClick={() => router.push(`/psychology-test/${e.id}`)}
              >
                {e.is_visible ? "Тест бөглөх" : "Тун удахгүй"}
              </button>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default QuizComponent;
