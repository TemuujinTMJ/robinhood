"use client";

import { useAppSelector } from "@/services/hooks";
import { useRouter } from "next/navigation";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loadingUser } = useAppSelector((state) => state.FetchUser);
  if (typeof window !== "undefined") {
    if (user && !loadingUser) {
      return <>{children}</>;
    } else {
      router.replace("/login");
      return null;
    }
  }
  return null;
}
