"use client";
import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
  message,
} from "antd";
import type { DatePickerProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch } from "@/services/hooks";
import { JournalCreate } from "@/services/modules/journal/journalCreate.service";
import dayjs from "dayjs";

export default function Journal() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();
  const [date, setDate] = useState(dayjs().format())
  const dispatch = useAppDispatch();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleDrawerOpen = () => {
    setDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    form.resetFields();
    setDrawerVisible(false);
  };

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(JournalCreate(values))
        console.log("Form Values: ", values);
        message.success("Тэмдэглэл амжилттай нэмэгдлээ!");
        handleDrawerClose();
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  const columns = [
    { title: "Огноо", dataIndex: "date", key: "date" },
    { title: "Орсон цаг", dataIndex: "time_start", key: "time_start" },
    { title: "Гарсан цаг", dataIndex: "time_end", key: "time_end" },
    { title: "Хослол", dataIndex: "pair", key: "pair" },
    { title: "Лот", dataIndex: "lots", key: "lots" },
    { title: "Чиглэл", dataIndex: "direction", key: "direction" },
    { title: "Оролт", dataIndex: "entry", key: "entry" },
    { title: "Төлөвлөгөө", dataIndex: "setup", key: "setup" },
    { title: "Stop loss", dataIndex: "sl", key: "sl" },
    { title: "Гарсан ханш", dataIndex: "exit_price", key: "exit_price" },
    { title: "Гарсан шалтгаан", dataIndex: "exit_logic", key: "exit_logic" },
    { title: "Ашиг/Алдгадал", dataIndex: "p_and_l", key: "p_and_l" },
    {
      title: "Дүрэм дагасан эсэх",
      dataIndex: "rules_followed",
      key: "rules_followed",
    },
    { title: "Тэмдэглэл", dataIndex: "trade_report", key: "trade_report" },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: () => (
        <div>
          <Button>Delete</Button>
          <Button>Update</Button>
        </div>
      ),
    },
  ];
  const currentMonthYear = dayjs().format('YYYY-MM');

  return (
    <div className="mx-4" style={{ height: "calc(100vh - 185px)" }}>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <DatePicker onChange={onChange} picker="month" />
            <DatePicker onChange={onChange} picker="week" />
            <DatePicker onChange={onChange} />
          </div>
          <Button onClick={handleDrawerOpen}>Тэмдэглэл нэмэх</Button>
        </div>
        <Table columns={columns as []} loading={false} />
      </div>
      <Drawer
        title="Тэмдэглэл нэмэх"
        placement="right"
        onClose={handleDrawerClose}
        visible={drawerVisible}
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              name="date"
              label="Огноо"
              rules={[
                { required: true, message: "Огноо заавал шаардлагатай!" },
              ]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item
              name="pair"
              label="Хослол"
              rules={[
                { required: true, message: "Хослол заавал шаардлагатай!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              name="time_start"
              label="Орсон цаг"
              rules={[
                { required: true, message: "Орсон цаг заавал шаардлагатай!" },
              ]}
            >
              <DatePicker picker="time" className="w-full" />
            </Form.Item>
            <Form.Item
              name="time_end"
              label="Гарсан цаг"
              rules={[
                { required: true, message: "Гарсан цаг заавал шаардлагатай!" },
              ]}
            >
              <DatePicker picker="time" className="w-full" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              name="lots"
              label="Лот"
              rules={[{ required: true, message: "Лот заавал шаардлагатай!" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="direction"
              label="Чиглэл"
              rules={[
                { required: true, message: "Чиглэл заавал шаардлагатай!" },
              ]}
            >
              <Select
                options={[
                  { label: "Long", value: "LONG" },
                  { label: "Short", value: "SHORT" },
                ]}
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              name="entry"
              label="Орсон ханш"
              rules={[
                { required: true, message: "Орсон ханш заавал шаардлагатай!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="exit_price"
              label="Гарсан ханш"
              rules={[
                { required: true, message: "Гарсан ханш заавал шаардлагатай!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              name="sl"
              label="Stop loss"
              rules={[
                { required: true, message: "Stop loss заавал шаардлагатай!" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="p_and_l"
              label="Ашиг/Алдгадал"
              rules={[
                {
                  required: true,
                  message: "Ашиг/Алдагдал заавал шаардлагатай!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </div>
          <Form.Item
            name="setup"
            label="Арилжааны төлөвлөгөө"
            rules={[
              { required: true, message: "Төлөвлөгөө заавал шаардлагатай!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rules_followed"
            label="Дүрэм дагасан эсэх"
            rules={[
              { required: true, message: "Энэ талбар заавал шаардлагатай!" },
            ]}
          >
            <Select
              options={[
                { label: "Тийм", value: true },
                { label: "Үгүй", value: false },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="exit_logic"
            label="Гарсан шалтгаан"
            rules={[
              {
                required: true,
                message: "Гарсан шалтгаан заавал шаардлагатай!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            name="trade_report"
            label="Тэмдэглэл"
            rules={[
              { required: true, message: "Тэмдэглэл заавал шаардлагатай!" },
            ]}
          >
            <TextArea />
          </Form.Item>
          <div className="flex justify-between">
            <Button htmlType="button" onClick={handleDrawerClose}>Цуцлах</Button>
            <Button htmlType="submit">Хадгалах</Button>
          </div>
        </Form>
      </Drawer>
    </div>
  );
}
