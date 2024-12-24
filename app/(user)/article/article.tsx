"use client";

import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetAdminArticleList } from "@/services/modules/admin/article/getArticleList.service";
import { Article } from "@/types/types";
import { Spin } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ArticlePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { total, getArticleListLoading } = useAppSelector(
    (state) => state.GetArticleList
  );

  const [data, setData] = useState<Article[] | []>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  const fetchArticles = async () => {
    if (getArticleListLoading || !hasMore) return;
    dispatch(
      await GetAdminArticleList({ page_size: 1, page_number: pageNumber })
    ).then((response) => {
      const newArticles = response.payload?.articles || [];
      setData((prevData) => [...prevData, ...newArticles]);
      setPageNumber((prevPage) => prevPage + 1);
    });
    console.log(data.length, total, hasMore);
    if (data.length === total) {
      setHasMore(false);
    }
  };
  useEffect(() => {
    if (inView) {
      fetchArticles();
    }
  }, [inView, pageNumber]);
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 &&
          data.map((e) => {
            return (
              <div
                key={e?.id}
                className="bg-glass backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col hover:scale-105"
              >
                <div>
                  <Image
                    src="https://drive.usercontent.google.com/download?id=1q77RfWYhNUWy7920iUyw56rGrGPKRDeK&authuser=0"
                    width={600}
                    height={200}
                    alt="sdf"
                  />
                  <h3 className="text-lg font-semibold mb-2">{e?.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {dayjs(e?.updated_at).format("YYYY-MM-DD HH:mm")}
                  </p>
                </div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-auto transition duration-300"
                  onClick={() => router.push(`/psychology-test/${e.id}`)}
                >
                  Read More
                </button>
              </div>
            );
          })}
      </div>
      <div ref={ref} className="flex justify-center mt-8 h-16">
        {hasMore ? <Spin /> : <div>End Reached</div>}
      </div>
    </Container>
  );
}
