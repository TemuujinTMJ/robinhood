"use client";
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
      <div style={{ width: 256 }} className="min-h-full">
        <Menu
          defaultSelectedKeys={[
            `${items.find((e) => e?.key === pathname)?.key || "/admin"}`,
          ]}
          style={{height: '100%'}}
          mode="inline"
          theme="dark"
          items={items}
        />
      </div>
  );
};

export default AdminMenu;
