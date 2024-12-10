"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/services/hooks";
import { useRouter } from "next/navigation";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loadingUser } = useAppSelector((state) => state.FetchUser);

  useEffect(() => {
    if (!loadingUser && !user) {
      router.replace("/login");
    }
  }, [loadingUser, user, router]);

  if (loadingUser) {
    // Optionally, show a loading state
    return <div>Loading...</div>;
  }

  if (!user) {
    // Prevent rendering the children while redirecting
    return null;
  }

  return <>{children}</>;
}