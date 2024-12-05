"use client";

import { useAppSelector } from "@/services/hooks";
import { message } from "antd";
import { useRouter } from "next/navigation";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.FetchUser);
  if (typeof window !== 'undefined') {
    if (user) {
      return <>{children}</>;
    } else {
      message.warning('Та нэвтрээгүй байна!!')
      router.replace("/login");
    }
  }
  
}
