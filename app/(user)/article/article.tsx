"use client";

import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetAdminArticleList } from "@/services/modules/admin/article/getArticleList.service";
import { Spin } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ArticlesPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { total, getArticleListLoading, articles } = useAppSelector(
    (state) => state.GetArticleList
  );

  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(articles.length === 0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (getArticleListLoading || !hasMore) return;

    if (inView) {
      dispatch(
        GetAdminArticleList({ page_size: 1, page_number: pageNumber })
      ).then(() => {
        setPageNumber((prevPage) => prevPage + 1);
      });
      if (articles.length === total) {
        setHasMore(false);
      }
    }
  }, [inView, pageNumber]);
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.length > 0 &&
          articles.map((e) => {
            return (
              <div
                key={e?.id}
                className="bg-glass backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col hover:scale-105"
              >
                <div>
                  <Image
                    src={e.image_path}
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
                  onClick={() => router.push(`/article/${e.id}`)}
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
