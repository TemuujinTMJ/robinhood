"use client";
import { useAppSelector } from "@/services/hooks";
import { GetAdminUserList } from "@/services/modules/admin/user/getUserList.service";
import { Table } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useAppSelector((state) => state.GetAdminUsers);
  useEffect(() => {
    dispatch(GetAdminUserList());
  }, []);
  console.log(users[0]);

  const columns = [
    {
      key: "No",
      title: "No",
      dataIndex: "id",
      render: (item: unknown, record: unknown, index: number) => <div>{index + 1}</div>,
    },
    {
      key: "id",
      title: "id",
      dataIndex: "id",
    },
    {
      key: "first_name",
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "role",
      title: "Role",
      dataIndex: "role",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "subscription_type",
      title: "Subscription Type",
      dataIndex: "subscription_type",
    },
    {
      key: "trading_account",
      title: "Trading Account",
      dataIndex: "trading_account",
    },
    {
      key: "badge",
      title: "Badge",
      dataIndex: "badge",
    },
    {
      key: "created_at",
      title: "Created At",
      dataIndex: "created_at",
      render: (e: string) => dayjs(e).format("YYYY-MM-DD"),
    },
  ];
  return (
    <div>
      <Table dataSource={users} columns={columns} loading={loading} />
    </div>
  );
}
