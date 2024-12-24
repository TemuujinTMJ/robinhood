"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetAdminArticleSingle } from "@/services/modules/admin/article/getArticleSingle.service";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect } from "react";

export default function Article({ params }: { params: { id: number } }) {
  const { article, getArticleLoading } = useAppSelector(
    (state) => state.GetArticleSingle
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAdminArticleSingle({ id: params.id }));
  }, []);

  if (getArticleLoading) return null;

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[700px] mx-4 grid gap-2">
        <Header canGoBack title={article?.title as string} />
        <Image
          src={article?.image_path as string}
          width={700}
          height={200}
          alt="img"
        />
        <div className="text-gray-600 text-end">{dayjs(article?.created_at).format("YYYY-MM-DD HH:mm")}</div>
        <div dangerouslySetInnerHTML={{__html: article?.description as string}} />
      </div>
    </div>
  );
}
