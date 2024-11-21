"use client";
import { useEffect } from "react";

import { useAppSelector } from "@/services/hooks";
import { useRouter } from "next/navigation";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { loadingUser, user } = useAppSelector((state) => state.FetchUser);

  useEffect(() => {
    if(user && user.role !== 1)
    router.replace(`/`);
  }, [loadingUser]);

  if (loadingUser) return <></>;
  return <>{children}</>;
}
