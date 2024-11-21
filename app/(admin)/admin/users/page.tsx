"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { AddAdminUser } from "@/services/modules/admin/user/addUser.service";
import { GetAdminUserList } from "@/services/modules/admin/user/getUserList.service";
import { UpdateAdminUser } from "@/services/modules/admin/user/updateUser.service";
import { User } from "@/types/types";
import { Button, Drawer, Form, Input, message, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Users() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [form] = useForm();
  const [pageNum, setPageNum] = useState(1);
  const { users, loadingUsers, total } = useAppSelector(
    (state) => state.GetAdminUsers
  );
  const { loadingUserCreateAdmin } = useAppSelector(
    (state) => state.AddAdminUserReducer
  );
  const { loadingUpdateUsers } = useAppSelector(
    (state) => state.updateAdminUserReducer
  );
  useEffect(() => {
    dispatch(GetAdminUserList({ page_size: 10, page_number: pageNum }));
    console.log(pageNum)
  }, [pageNum]);
  const onFinish = (values: any) => {
    if (isUpdate) {
      dispatch(UpdateAdminUser(values)).then((e) => {
        if (e.payload.success) {
          message.success(e.payload.response);
          setIsOpen(false);
        } else {
          message.error(e.payload.response);
        }
      });
    } else {
      dispatch(AddAdminUser(values)).then((e) => {
        if (e.payload.success) {
          message.success(e.payload.response);
          setIsOpen(false);
        } else {
          message.error(e.payload.response);
        }
      });
    }
  };
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
      width: 100,
      dataIndex: "id",
      render: (_: any, record: any) => (
        <div className="flex gap-1 flex-nowrap">
          <Button
            onClick={() => {
              setIsUpdate(true), form.setFieldsValue(record), setIsOpen(true);
            }}
          >
            udpate
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Header
        title={`Website users (${total})`}
        extra={
          <Button
            onClick={() => {
              setIsOpen(true), setIsUpdate(false), form.resetFields();
            }}
          >
            Add User
          </Button>
        }
      />
      <Table
        dataSource={users as User[]}
        columns={columns}
        loading={loadingUsers}
        rowKey={(record) => record?.id}
        pagination={{ current: pageNum, onChange: (e) => setPageNum(e), total, pageSize: 10 }}
      />
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          disabled={loadingUserCreateAdmin || loadingUpdateUsers}
        >
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
          {isUpdate && (
            <div>
              <Form.Item name="role" label="Role">
                <Input />
              </Form.Item>
              <Form.Item name="status" label="Status">
                <Input />
              </Form.Item>
              <Form.Item name="subscription_type" label="Subsription Type">
                <Input />
              </Form.Item>
              <Form.Item name="badge" label="Badge">
                <Input />
              </Form.Item>
              <Form.Item name="xp" label="Xp">
                <Input />
              </Form.Item>
              <Form.Item name="id" />
            </div>
          )}
          <Button
            htmlType="submit"
            loading={loadingUserCreateAdmin || loadingUpdateUsers}
          >
            Save
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}
