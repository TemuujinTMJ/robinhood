"use client";
import { useAppSelector } from "@/services/hooks";
import { useRouter } from "next/navigation";
import { message } from "antd";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.FetchUser);
  if (typeof window !== 'undefined') {
    if (user && user.role === 1) {
      return <>{children}</>;
    } else {
      router.replace("/login");
      message.warning("Та нэвтрээгүй байна!!!");
    }
  }
  
}
