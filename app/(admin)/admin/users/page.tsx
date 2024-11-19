"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { AddAdminUser } from "@/services/modules/admin/user/addUser.service";
import { GetAdminUserList } from "@/services/modules/admin/user/getUserList.service";
import { User } from "@/types/types";
import { Button, Drawer, Form, Input, message, Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Users() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { users, loadingUsers } = useAppSelector(
    (state) => state.GetAdminUsers
  );
  const {loadingUserCreateAdmin} = useAppSelector((state) => state.AddAdminUserReducer)
  useEffect(() => {
    dispatch(GetAdminUserList());
  }, []);
  const onFinish = (values: any) => {
    dispatch(AddAdminUser(values)).then((e) => {
      if(e.payload.success) {
        message.success("User Created Successfully Created!!!")
        setIsOpen(false)
      } else {
        message.error(e.payload.response)
      }
    })
  }
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
        title="Website users"
        extra={<Button onClick={() => setIsOpen(true)}>Add User</Button>}
      />
      <Table
        dataSource={users as User[]}
        columns={columns}
        loading={loadingUsers}
        rowKey={(record) => record?.id}
      />
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="First Name" name="first_name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="last_name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Trading Account" name="trading_account">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
          <Button htmlType="submit" loading={loadingUserCreateAdmin}>Save</Button>          
        </Form>
      </Drawer>
    </div>
  );
}
