"use client";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { UpdateUser } from "@/services/modules/user/updateUser.service";
import { Button, Form, Input } from "antd";

export default function ProfileForm() {
  const { user } = useAppSelector((state) => state.FetchUser);
  const { loadingUserUpdate } = useAppSelector((state) => state.UpdateUser);
  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    dispatch(UpdateUser(values));
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-glass backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Хэрэглэгчийн мэдээлэл
        </h2>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-6"
          initialValues={user || {}}
        >
          <Form.Item name="last_name" label="Овог:">
            <Input />
          </Form.Item>
          <Form.Item name="first_name" label="Нэр:">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Цахим шуудан:">
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Утас:">
            <Input />
          </Form.Item>
          {/* <Form.Item name="trading_account" label="Брокерийн данс:">
            <Input className="w-full" />
          </Form.Item> */}
          <Button
            loading={loadingUserUpdate}
            size="large"
            htmlType="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Мэдээлэл шинэчлэх
          </Button>
        </Form>
      </div>
    </div>
  );
}
