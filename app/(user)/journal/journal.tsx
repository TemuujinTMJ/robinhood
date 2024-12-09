"use client";
import Container from "@/components/container";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { Button, DatePicker, DatePickerProps, Table } from "antd";
import React from "react";

export default function Journal() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const dispatch = useAppDispatch();
  const { journal, journalListloading } = useAppSelector(
    (state) => state.GetJournalList
  );
  console.log(journal);
  const columns = [
    {
      title: "Огноо",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Орсон цаг",
      dataIndex: "time_start",
      key: "time_start",
    },
    {
      title: "Гарсан цаг",
      dataIndex: "time_end",
      key: "time_end",
    },
    {
      title: "Хослол",
      dataIndex: "pair",
      key: "pair",
    },
    {
      title: "Лот",
      dataIndex: "lots",
      key: "lots",
    },
    {
      title: "Чиглэл",
      dataIndex: "direction",
      key: "direction",
    },
    {
      title: "Оролт",
      dataIndex: "entry",
      key: "entry",
    },
    {
      title: "Төлөвлөгөө",
      dataIndex: "setup",
      key: "setup",
    },
    {
      title: "Stop loss",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Гарсан ханш",
      dataIndex: "exit_price",
      key: "exit_price",
    },
    {
      title: "Гарсан шалтгаан",
      dataIndex: "exit_logic",
      key: "exit_logic",
    },
    {
      title: "Ашиг/Алдгадал",
      dataIndex: "p_and_l",
      key: "p_and_l",
    },
    {
      title: "Дүрэм дагасан эсэх",
      dataIndex: "rules_followed",
      key: "rules_followed",
    },
    {
      title: "Тэмдэглэл",
      dataIndex: "trade_report",
      key: "trade_report",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: () => {
        <div>
          <Button>Delete</Button>
          <Button>Update</Button>
        </div>;
      },
    },
  ];
  return (
    <div className="mx-4" style={{ height: "calc(100vh - 185px)" }}>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <DatePicker onChange={onChange} picker="month" />
            <DatePicker onChange={onChange} picker="week" />
            <DatePicker onChange={onChange} />
          </div>
          <Button>Тэмдэглэл нэмэх</Button>
        </div>
        {/* <Table columns={columns} loading={journalListloading} /> */}
      </div>
    </div>
  );
}
