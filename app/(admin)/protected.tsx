"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/services/hooks";
import { useRouter } from "next/navigation";
import { Spin } from "antd";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loadingUser } = useAppSelector((state) => state.FetchUser);

  useEffect(() => {
    if (!loadingUser && !user) {
      router.replace("/login");
    }
  }, [loadingUser, user, router]);

  if (loadingUser) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  if (!user) {
    // Prevent rendering the children while redirecting
    return null;
  }

  return <>{children}</>;
}
