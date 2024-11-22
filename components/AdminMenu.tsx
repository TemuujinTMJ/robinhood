"use client";
import { useAppSelector } from "@/services/hooks";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Affix, Menu } from "antd";
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
      key: "/admin/pip_calculator",
      icon: <ContainerOutlined />,
      label: "Pip Calculator",
      onClick: () => router.push("/admin/pip_calculator"),
    },
    {
      key: "/admin/article",
      icon: <ContainerOutlined />,
      label: "Article",
      onClick: () => router.push("/admin/article"),
    },
    {
      key: "Back to Robinhood",
      icon: <ContainerOutlined />,
      label: "Back to Robinhood",
      onClick: () => router.push("/"),
    },
  ];
  return (
    <Affix offsetTop={0}>
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
    </Affix>
  );
};

export default AdminMenu;
