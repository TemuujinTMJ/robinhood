"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { CreateAdminQuizList } from "@/services/modules/admin/quiz/createQuizList.service";
import { DeleteAdminQuizList } from "@/services/modules/admin/quiz/deleteQuizList.service";
import { GetAdminQuizList } from "@/services/modules/admin/quiz/getQuizList.service";
import { UpdateAdminQuizList } from "@/services/modules/admin/quiz/updateQuizList.service";
import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Space,
  Table,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Quiz() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [form] = useForm();
  const [pageNum, setPageNum] = useState(1);
  const { getQuizloading, quiz, total } = useAppSelector(
    (state) => state.GetQuizList
  );
  const { udpateQuizloading } = useAppSelector((state) => state.UpdateQuizList);
  const { addQuizloading } = useAppSelector((state) => state.CreateQuizList);
  const { deleteQuizloading } = useAppSelector((state) => state.DeleteQuizList);
  useEffect(() => {
    dispatch(GetAdminQuizList({ page_size: 10, page_number: pageNum }));
  }, [pageNum, dispatch]);
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      if (isUpdate) {
        dispatch(UpdateAdminQuizList(values)).then((e) => {
          if (e.payload.success) {
            message.success(e.payload.response);
            setIsOpen(false);
            dispatch(GetAdminQuizList({ page_size: 8, page_number: pageNum }));
          } else {
            message.error(e.payload.response);
          }
        });
      } else {
        dispatch(CreateAdminQuizList(values)).then((e) => {
          if (e.payload.success) {
            message.success(e.payload.response);
            setIsOpen(false);
            dispatch(GetAdminQuizList({ page_size: 8, page_number: pageNum }));
          } else {
            message.error(e.payload.response);
          }
        });
      }
    } catch (error) {
      console.log("Validation Failed:", error);
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
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "desctiption",
      title: "Desctiption",
      dataIndex: "desctiption",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "is_visible",
    },
    {
      key: "quiz_type",
      title: "Quiz Type",
      dataIndex: "quiz_type",
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
      width: 100,
      render: (_: any, record: any) => (
        <div className="flex gap-1 flex-nowrap">
          <Button
            loading={deleteQuizloading}
            onClick={() => {
              dispatch(DeleteAdminQuizList({ id: record.id })).then((e) => {
                if (e.payload.success) {
                  message.success("Course deleted!!");
                } else {
                  message.success(e.payload.response);
                }
                dispatch(
                  GetAdminQuizList({ page_size: 10, page_number: pageNum })
                );
              });
            }}
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
  const imageLink = Form.useWatch("image_path", form);
  return (
    <div>
      <Header
        title={`Quizs (${total})`}
        extra={
          <Button
            onClick={() => {
              setIsOpen(true), setIsUpdate(false), form.resetFields();
            }}
          >
            Add Quiz
          </Button>
        }
      />
      <Table
        dataSource={quiz as []}
        columns={columns}
        loading={getQuizloading}
        rowKey={(record: any) => record?.id}
        pagination={{
          current: pageNum,
          onChange: (e) => setPageNum(e),
          total,
          pageSize: 10,
        }}
      />
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        width={650}
        extra={
          <Button
            onClick={onFinish}
            loading={addQuizloading || udpateQuizloading}
          >
            Save
          </Button>
        }
      >
        <Form
          form={form}
          name="dynamic_form_complex"
          autoComplete="off"
          initialValues={{ items: [{}], is_visible: 1, quiz_type: 0 }}
          onFinishFailed={() =>
            message.error("Please complete the required fields!")
          }
          layout="vertical"
        >
          {isUpdate && <Form.Item name="id" className="hidden" />}

          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Name is required!" },
              { min: 3, message: "Name must be at least 3 characters long!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Description is required!" },
              {
                max: 500,
                message: "Description cannot exceed 500 characters!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Image Link"
            name="image_path"
            rules={[{ required: true, message: "Image Link is required!" }]}
          >
            <Input />
          </Form.Item>
          <div className="flex justify-center">
            <Image src={imageLink || ""} width={400} alt="image" height={100} />
          </div>
          <Form.Item
            label="Status"
            name="is_visible"
            rules={[{ required: true, message: "Status is required!" }]}
          >
            <Select
              options={[
                { label: "Active", value: 1 },
                { label: "Inactive", value: 0 },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Quiz Type"
            name="quiz_type"
            rules={[{ required: true, message: "Quiz type is required!" }]}
          >
            <Select
              options={[
                { label: "Free", value: 0 },
                { label: "Paid", value: 1 },
              ]}
            />
          </Form.Item>

          <Form.List name="questions">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Quistion ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <Button
                        type="link"
                        ghost
                        danger
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        Remove Question
                      </Button>
                    }
                  >
                    <Form.Item
                      label="Question"
                      name={[field.name, "question"]}
                      rules={[
                        { required: true, message: "Question is required!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item label="Answer">
                      <Form.List name={[field.name, "answers"]}>
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "answer"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Answer is required!",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Answer" />
                                </Form.Item>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "point"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Point is required!",
                                    },
                                    {
                                      type: "number",
                                      transform: (value) => Number(value),
                                      message: "Point must be a number!",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Point" />
                                </Form.Item>
                                <Button
                                  type="link"
                                  ghost
                                  danger
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                >
                                  Remove Answer
                                </Button>
                              </Space>
                            ))}
                            <Button
                              type="dashed"
                              onClick={() => subOpt.add()}
                              block
                            >
                              + Add Answer
                            </Button>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  className="mb-4"
                >
                  + Add Question
                </Button>
              </div>
            )}
          </Form.List>

          <Form.List name="results">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Result ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <Button
                        type="link"
                        ghost
                        danger
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        Remove Result
                      </Button>
                    }
                  >
                    <Form.Item
                      label="Name"
                      name={[field.name, "name"]}
                      rules={[{ required: true, message: "Name is required!" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Result"
                      name={[field.name, "result"]}
                      rules={[
                        { required: true, message: "Result is required!" },
                      ]}
                    >
                      <TextArea />
                    </Form.Item>
                    <div className="grid grid-cols-2 gap-4">
                      <Form.Item
                        label="Point After"
                        name={[field.name, "point_range", 0]}
                        rules={[
                          {
                            required: true,
                            message: "Point After is required!",
                          },
                        ]}
                      >
                        <InputNumber placeholder="0" className="w-full" />
                      </Form.Item>
                      <Form.Item
                        label="Point Before"
                        name={[field.name, "point_range", 1]}
                        rules={[
                          {
                            required: true,
                            message: "Point Before is required!",
                          },
                        ]}
                      >
                        <InputNumber placeholder="29" className="w-full" />
                      </Form.Item>
                    </div>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Result
                </Button>
              </div>
            )}
          </Form.List>
        </Form>
      </Drawer>
    </div>
  );
}
