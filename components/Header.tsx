import React from "react";
import BackIcon from "@/public/back.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Header({
  title,
  extra,
  canGoBack = false,
}: {
  canGoBack?: boolean;
  title: string;
  extra?: any;
}) {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between items-center mb-4">
      <h3 className="flex gap-2">
        {canGoBack && (
          <Image
            src={BackIcon}
            width={20}
            height={20}
            alt="back"
            onClick={() => router.back()}
          />
        )}{" "}
        {title}
      </h3>
      <div>{extra && extra}</div>
    </div>
  );
}
