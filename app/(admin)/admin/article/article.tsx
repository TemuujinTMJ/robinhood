"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { CreateAdminArticle } from "@/services/modules/admin/article/createArticle.service";
import { DeleteAdminArticle } from "@/services/modules/admin/article/deleteArticle.service";
import { GetAdminArticleList } from "@/services/modules/admin/article/getArticleList.service";
import { UpdateAdminArticle } from "@/services/modules/admin/article/updateArticle.service";
import { Button, Drawer, Form, Input, message, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Article() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [form] = useForm();
  const [pageNum, setPageNum] = useState(1);
  const { getArticleListLoading, total, articles } = useAppSelector(
    (state) => state.GetArticleList
  );
  const { createArticleloading } = useAppSelector(
    (state) => state.CreateArticle
  );
  const { deleteArticleloading } = useAppSelector(
    (state) => state.DeleteArticle
  );
  const { udpateQuizloading } = useAppSelector((state) => state.UpadteArticle);
  useEffect(() => {
    dispatch(GetAdminArticleList({ page_size: 10, page_number: pageNum }));
  }, [pageNum, dispatch]);
  const onFinish = (values: any) => {
    if (isUpdate) {
      dispatch(UpdateAdminArticle(values)).then((e) => {
        if (!e.payload.success) {
          message.error(e.payload.error);
        } else {
          setIsOpen(false);
          dispatch(
            GetAdminArticleList({ page_size: 10, page_number: pageNum })
          );
        }
      });
    } else {
      dispatch(CreateAdminArticle(values)).then((e) => {
        if (!e.payload.success) {
          message.error(e.payload.error);
        } else {
          setIsOpen(false);
          dispatch(
            GetAdminArticleList({ page_size: 10, page_number: pageNum })
          );
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
      key: "title",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "id",
      title: "Id",
      dataIndex: "id",
    },
    {
      key: "created_at",
      title: "Created At",
      dataIndex: "created_at",
      render: (e: string) => dayjs(e).format("YYYY-MM-DD"),
    },
    {
      key: "updated_at",
      title: "Update At",
      dataIndex: "updated_at",
      render: (e: string) => dayjs(e).format("YYYY-MM-DD"),
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "id",
      width: 200,
      render: (e: any, record: any) => (
        <div className="flex gap-1 flex-nowrap">
          <Button
            onClick={() =>
              dispatch(DeleteAdminArticle({ id: e })).then((d) => {
                if (d.payload.success) {
                  dispatch(
                    GetAdminArticleList({ page_size: 10, page_number: pageNum })
                  );
                }
              })
            }
            loading={deleteArticleloading}
          >
            Delete
          </Button>
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
  const img = Form.useWatch("image_path", form);
  return (
    <div>
      <Header
        title={`Article (${total})`}
        extra={
          <Button
            onClick={() => {
              setIsOpen(true), setIsUpdate(false), form.resetFields();
            }}
          >
            Add Article
          </Button>
        }
      />
      <Table
        dataSource={articles}
        columns={columns}
        loading={getArticleListLoading}
        rowKey={(record: any) => record?.id}
        pagination={{
          current: pageNum,
          onChange: (e) => setPageNum(e),
          total,
          pageSize: 10,
        }}
      />
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} width={650}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          initialValues={{ items: [{}] }}
          onFinish={onFinish}
        >
          {isUpdate && <Form.Item name="id" hidden />}
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Image" name="image_path">
            <Input />
          </Form.Item>
          <div className="flex justify-center my-2">
            <Image src={img || ""} width={400} height={100} alt="article" />
          </div>

          <Form.Item label="Description" name="description">
            <ReactQuill />
          </Form.Item>

          <Button
            className="fixed right-5 top-3"
            htmlType="submit"
            loading={createArticleloading || udpateQuizloading}
          >
            Save
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}
