"use client";
import { useAppSelector } from "@/services/hooks";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

const AdminMenu: React.FC = () => {
  const { user } = useAppSelector((state) => state.FetchUser);
  const pathname = usePathname();
  const router = useRouter();
  const items: MenuItem[] = [
    {
      key: "/admin",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      onClick: () => router.push("/admin"),
    },
    {
      key: "/admin/users",
      icon: <PieChartOutlined />,
      label: "Website Users",
      onClick: () => router.push("/admin/users"),
    },
    {
      key: "/admin/quiz",
      icon: <DesktopOutlined />,
      label: "Quiz",
      onClick: () => router.push("/admin/quiz"),
    },
    {
      key: "/admin/courses",
      icon: <ContainerOutlined />,
      label: "Courses",
      onClick: () => router.push("/admin/courses"),
    },
    {
      key: "Back to Robinhood",
      icon: <ContainerOutlined />,
      label: "Back to Robinhood",
      onClick: () => router.push("/"),
    },
  ];
  console.log(items.find((e) => e?.key === pathname))
  console.log(pathname)
  return (
    <div style={{ width: 256 }}>
      <Menu
        className="h-screen"
        defaultSelectedKeys={[`${items.find((e) => e?.key === pathname)?.key || "/admin"}`]}
        mode="inline"
        theme="dark"
        items={items}
      />
      <div className="z-20 fixed bottom-0 left-0 p-4">{user?.email}</div>
    </div>
  );
};

export default AdminMenu;
