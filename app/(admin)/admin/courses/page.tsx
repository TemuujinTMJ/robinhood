"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetCourseList } from "@/services/modules/admin/course/getCourseList.service";
import { Button, Drawer, Form, Input, Table } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

export default function Quiz() {
  const dispatch = useAppDispatch();
  const { courses, loading } = useAppSelector((state) => state.GetCourseList);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(GetCourseList());
  }, []);
  console.log(courses);
  const columns = [
    {
      key: "No",
      title: "No",
      dataIndex: "id",
      width: 50,
      render: (item: unknown, record: unknown, index: number) => (
        <div>{index + 1}</div>
      ),
    },
    {
      key: "first_name",
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      key: "last_name",
      title: "Last Name",
      dataIndex: "last_name",
    },
    {
      key: "id",
      title: "id",
      dataIndex: "id",
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
    {
      key: "action",
      title: "Action",
      dataIndex: "id",
      render: (e: number) => (
        <div className="flex gap-1 flex-nowrap">
          <Button>edit</Button>
          <Button onClick={() => console.log(e)}>udpate</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Header
        title="Courses"
        extra={<Button onClick={() => setIsOpen(true)}>Add Course</Button>}
      />
      <Table columns={columns} loading={loading} />
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Form layout="vertical">
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
