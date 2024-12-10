"use client";
import Trash from "@/public/Red Trash Icon.png";
import Edit from "@/public/edit.png";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { JournalCreate } from "@/services/modules/journal/journalCreate.service";
import { JournalDelete } from "@/services/modules/journal/journalDelete.service";
import { JournalList } from "@/services/modules/journal/journalList.service";
import { JournalUpdate } from "@/services/modules/journal/journalUpdate.service";
import {
  Button,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Table
} from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Journal() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();
  const [isCreate, setIsCreate] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    date_start: dayjs().startOf("month").format("YYYY-MM-DD HH:mm:ss"),
    date_end: dayjs().endOf("month").format("YYYY-MM-DD HH:mm:ss"),
  });
  const [selectedDateTitle, setSelectedDateTitle] = useState(
    `${dayjs().startOf("month").format("YYYY/MM/DD")} - ${dayjs()
      .startOf("month")
      .format("YYYY/MM/DD")}`
  );
  const [monthPickerValue, setMonthPickerValue] = useState<dayjs.Dayjs | null>(
    null
  );
  const [weekPickerValue, setWeekPickerValue] = useState<dayjs.Dayjs | null>(
    null
  );
  const [dayPickerValue, setDayPickerValue] = useState<dayjs.Dayjs | null>(
    null
  );
  const dispatch = useAppDispatch();

  const handlePickerChange = (pickerType: "day" | "week" | "month") => {
    return (date: dayjs.Dayjs | null) => {
      setMonthPickerValue(null);
      setWeekPickerValue(null);
      setDayPickerValue(null);

      if (pickerType === "month") {
        setMonthPickerValue(date);
        setSelectedDate({
          date_start: dayjs(date)
            .startOf("month")
            .format("YYYY-MM-DD HH:mm:ss"),
          date_end: dayjs(date).endOf("month").format("YYYY-MM-DD HH:mm:ss"),
        });
        setSelectedDateTitle(dayjs(date).format("YYYY/MM-р сар"));
      }
      if (pickerType === "week") {
        setWeekPickerValue(date);
        setSelectedDate({
          date_start: dayjs(date).startOf("week").format("YYYY-MM-DD HH:mm:ss"),
          date_end: dayjs(date).endOf("week").format("YYYY-MM-DD HH:mm:ss"),
        });
        setSelectedDateTitle(
          dayjs(date).format(
            `${dayjs(date).startOf("week").format("YYYY/MM/DD")} - ${dayjs(date)
              .endOf("week")
              .format("YYYY/MM/DD")}`
          )
        );
      }
      if (pickerType === "day") {
        setDayPickerValue(date);
        setSelectedDate({
          date_start: dayjs(date).startOf("day").format("YYYY-MM-DD HH:mm:ss"),
          date_end: dayjs(date).endOf("day").format("YYYY-MM-DD HH:mm:ss"),
        });
        setSelectedDateTitle(dayjs(date).format("YYYY/MM/DD"));
      }
    };
  };

  const { journal, journalListloading, total } = useAppSelector(
    (state) => state.GetJournalList
  );
  const { journalCreateloading } = useAppSelector(
    (state) => state.CreateJournal
  );
  const { journalUpdateloading } = useAppSelector(
    (state) => state.UpdateJournal
  );
  const { journalDeleteloading } = useAppSelector(
    (state) => state.DeleteJournal
  );
  useEffect(() => {
    if (selectedDate) {
      dispatch(JournalList(selectedDate));
    }
  }, [selectedDate]);

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
        if (isCreate) {
          dispatch(JournalUpdate(values)).then((e) => {
            if (e.payload.success) {
              dispatch(JournalList(selectedDate));
              handleDrawerClose();
            }
          });
        } else {
          dispatch(JournalCreate(values)).then((e) => {
            if (e.payload.success) {
              dispatch(JournalList(selectedDate));
              handleDrawerClose();
            }
          });
        }
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  const columns = [
    {
      title: "Огноо",
      dataIndex: "date",
      key: "date",
      width: 120,
      fixed: "left",
    },
    {
      title: "Орсон цаг",
      dataIndex: "time_start",
      key: "time_start",
      width: 120,
      render: (e: string) => dayjs(e).format("HH:mm"),
    },
    {
      title: "Арилжааны төрөл",
      dataIndex: "trade_type",
      key: "time_end",
      width: 160,
    },
    { title: "Хослол", dataIndex: "pair", key: "pair", width: 100 },
    { title: "Лот", dataIndex: "lots", key: "lots", width: 80 },
    { title: "Чиглэл", dataIndex: "direction", key: "direction", width: 100 },
    { title: "Орсон ханш", dataIndex: "entry", key: "entry", width: 120 },
    {
      title: "Гарсан ханш",
      dataIndex: "exit_price",
      key: "exit_price",
      width: 130,
    },
    { title: "Stop loss", dataIndex: "sl", key: "sl", width: 120 },
    { title: "Төлөвлөгөө", dataIndex: "setup", key: "setup", width: 150 },
    {
      title: "Гарсан шалтгаан",
      dataIndex: "exit_logic",
      key: "exit_logic",
      width: 200,
    },
    {
      title: "Ашиг/Алдгадал",
      dataIndex: "p_and_l",
      key: "p_and_l",
      width: 150,
    },
    {
      title: "Дүрэм дагасан эсэх",
      dataIndex: "rules_followed",
      key: "rules_followed",
      width: 200,
    },
    {
      title: "Тэмдэглэл",
      dataIndex: "trade_report",
      key: "trade_report",
      width: 200,
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      width: 100,
      fixed: "right",
      render: (_: any, record: any) => (
        <div className="flex flex-nowrap gap-2">
          <Button
            onClick={() =>
              dispatch(JournalDelete({ id: record.id })).then((e) => {
                if (e.payload.success) {
                  dispatch(JournalList(selectedDate));
                }
              })
            }
            loading={journalDeleteloading}
          >
            <Image src={Trash} width={24} height={24} alt="edit" />
          </Button>
          <Button
            onClick={() => [
              setIsCreate(true),
              form.setFieldsValue({
                ...record,
                date: dayjs(record.date),
                time_start: dayjs(record.time_start),
              }),
              handleDrawerOpen(),
            ]}
          >
            <Image src={Edit} width={24} height={24} alt="edit" />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="mx-4" style={{ height: "calc(100vh - 185px)" }}>
      <div className="grid gap-4">
        <div className="flex justify-between flex-wrap">
          <div className="text-green-500 font-bold text-2xl">
            {selectedDateTitle} ({total})
          </div>
          <div className="gap-2 flex flex-wrap">
            <DatePicker
              onChange={handlePickerChange("month")}
              picker="month"
              placeholder="Сараар"
              value={monthPickerValue}
            />
            <DatePicker
              onChange={handlePickerChange("week")}
              picker="week"
              placeholder="7 хоногоор"
              value={weekPickerValue}
            />
            <DatePicker
              onChange={handlePickerChange("day")}
              placeholder="Өдрөөр"
              value={dayPickerValue}
            />
            <Button onClick={() => [handleDrawerOpen(), setIsCreate(false)]}>
              Тэмдэглэл нэмэх
            </Button>
          </div>
        </div>
        <Table
          columns={columns as []}
          loading={journalListloading}
          scroll={{ x: 2000 }}
          dataSource={journal}
          style={{ maxWidth: "98vw" }}
        />
      </div>
      <Drawer
        title="Тэмдэглэл нэмэх"
        placement="right"
        onClose={handleDrawerClose}
        open={drawerVisible}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <div className="grid grid-cols-2 gap-2">
              {isCreate && <Form.Item name="id" hidden />}
              <Form.Item
                name="date"
                label="Огноо"
                rules={[
                  { required: true, message: "Огноо заавал шаардлагатай!" },
                ]}
              >
                <DatePicker className="w-full" placeholder="Огноо" />
              </Form.Item>
              <Form.Item
                name="pair"
                label="Хослол"
                rules={[
                  { required: true, message: "Хослол заавал шаардлагатай!" },
                ]}
              >
                <Input placeholder="XAUUSD" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Form.Item
                name="time_start"
                label="Орсон цаг"
                rules={[
                  {
                    required: true,
                    message: "Орсон цаг заавал шаардлагатай!",
                  },
                ]}
              >
                <DatePicker
                  picker="time"
                  className="w-full"
                  placeholder="Орсон цаг"
                  format="HH:mm"
                />
              </Form.Item>
              <Form.Item
                name="trade_type"
                label="Арилжааны төрөл"
                rules={[
                  {
                    required: true,
                    message: "Гарсан цаг заавал шаардлагатай!",
                  },
                ]}
              >
                <Select
                  options={[
                    {
                      label: "Scalp",
                      value: "Scalp",
                    },
                    {
                      label: "Day",
                      value: "Day",
                    },
                    {
                      label: "Swing",
                      value: "Swing",
                    },
                  ]}
                  className="w-full"
                  placeholder="Day"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Form.Item
                name="lots"
                label="Лот"
                rules={[
                  { required: true, message: "Лот заавал шаардлагатай!" },
                ]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="0.1" />
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
                  placeholder="Long"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Form.Item
                name="entry"
                label="Орсон ханш"
                rules={[
                  {
                    required: true,
                    message: "Орсон ханш заавал шаардлагатай!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="2890.20" />
              </Form.Item>
              <Form.Item
                name="exit_price"
                label="Гарсан ханш"
                rules={[
                  {
                    required: true,
                    message: "Гарсан ханш заавал шаардлагатай!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="2895.20" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Form.Item
                name="sl"
                label="Stop loss"
                rules={[
                  {
                    required: true,
                    message: "Stop loss заавал шаардлагатай!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="2888.20" />
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
                <InputNumber
                  style={{ width: "100%" }}
                  suffix="$"
                  placeholder="1000 / -100"
                />
              </Form.Item>
            </div>
            <Form.Item
              name="setup"
              label="Арилжааны төлөвлөгөө"
              rules={[
                {
                  required: true,
                  message: "Төлөвлөгөө заавал шаардлагатай!",
                },
              ]}
            >
              <Input placeholder="Support/OrderBlock/Pattern ...." />
            </Form.Item>
            <Form.Item
              name="rules_followed"
              label="Дүрэм дагасан эсэх"
              rules={[
                {
                  required: true,
                  message: "Энэ талбар заавал шаардлагатай!",
                },
              ]}
            >
              <Select
                options={[
                  { label: "Тийм", value: true },
                  { label: "Үгүй", value: false },
                ]}
                placeholder="Тийм"
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
              <Select
                options={[
                  { label: "TP", value: "TP" },
                  { label: "SL", value: "SL" },
                  { label: "BE", value: "BE" },
                  { label: "Гараар салгасан", value: "Manual" },
                ]}
                placeholder="TP"
              />
            </Form.Item>
            <Form.Item
              name="trade_report"
              label="Тэмдэглэл"
              rules={[
                { required: true, message: "Тэмдэглэл заавал шаардлагатай!" },
              ]}
            >
              <TextArea placeholder="Tradingview chart link / Бүрдсэн нөхцөлүүд" />
            </Form.Item>
          </div>
          <div className="flex justify-between">
            <Button
              htmlType="button"
              onClick={handleDrawerClose}
              loading={journalCreateloading || journalUpdateloading}
            >
              Цуцлах
            </Button>
            <Button
              htmlType="submit"
              loading={journalCreateloading || journalUpdateloading}
            >
              Хадгалах
            </Button>
          </div>
        </Form>
      </Drawer>
    </div>
  );
}
