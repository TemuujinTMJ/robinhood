"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { CreateCourse } from "@/services/modules/admin/course/createCourse.service";
import { DeleteCourse } from "@/services/modules/admin/course/deleteCourse.service";
import { GetCourseList } from "@/services/modules/admin/course/getCourseList.service";
import { UpdateCourse } from "@/services/modules/admin/course/updateCourse.service";
import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  message,
  Select,
  Table,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Courses() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [form] = useForm();
  const [pageNum, setPageNum] = useState(1);
  const { courses, loading, total } = useAppSelector(
    (state) => state.GetCourseList
  );
  const { loadingCreate } = useAppSelector((state) => state.CreateCourse);
  const { loadingUpdate } = useAppSelector((state) => state.UpdateCourse);
  const { loadingDelete } = useAppSelector((state) => state.DeleteCourse);
  useEffect(() => {
    dispatch(GetCourseList({ page_size: 10, page_number: pageNum }));
  }, [pageNum]);
  const onFinish = (values: any) => {
    if (isUpdate) {
      dispatch(UpdateCourse(values)).then((e) => {
        if (e.payload.success) {
          message.success(e.payload.response);
          setIsOpen(false);
        } else {
          message.error(e.payload.response);
        }
      });
    } else {
      dispatch(CreateCourse(values)).then((e) => {
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
      key: "title",
      title: "Title",
      dataIndex: "name",
    },
    {
      key: "desctiption",
      title: "Desctiption",
      dataIndex: "desctiption",
    },
    {
      key: "id",
      title: "Id",
      dataIndex: "id",
    },
    {
      key: "course_type",
      title: "Course Type",
      dataIndex: "course_type",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "is_visible",
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
            loading={loadingDelete}
            onClick={() => {
              dispatch(DeleteCourse({ id: record.id })).then((e) => {
                if (e.payload.success) {
                  message.success("Course deleted!!");
                } else {
                  message.success(e.payload.response);
                }
                dispatch(
                  GetCourseList({ page_size: 10, page_number: pageNum })
                );
              });
            }}
          >
            Delete
          </Button>
          <Button
            loading={loadingDelete}
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
        title={`Courses (${total})`}
        extra={
          <Button
            onClick={() => {
              setIsOpen(true), setIsUpdate(false), form.resetFields();
            }}
          >
            Add Course
          </Button>
        }
      />
      <Table
        dataSource={courses}
        columns={columns}
        loading={loading}
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
          layout="vertical"
          labelCol={{ span: 6 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          initialValues={{ items: [{}] }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Course Name"
            name="name"
            rules={[
              { required: true, message: "Course name is required!" },
              {
                max: 100,
                message: "Course name must be at most 100 characters!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Course Description"
            name="desctiption"
            rules={[
              { required: true, message: "Course description is required!" },
              {
                max: 500,
                message: "Description must be at most 500 characters!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>
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
            label="Course Type"
            name="course_type"
            rules={[{ required: true, message: "Course type is required!" }]}
          >
            <Select
              options={[
                { label: "Free", value: 0 },
                { label: "Paid", value: 1 },
              ]}
            />
          </Form.Item>
          <Form.List name="lessons">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Lesson ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <Button
                        type="link"
                        danger
                        onClick={() => remove(field.name)}
                      >
                        Remove Lesson
                      </Button>
                    }
                  >
                    <Form.Item
                      label="Title"
                      name={[field.name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Lesson title is required!",
                        },
                        {
                          max: 100,
                          message: "Title must be at most 100 characters!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Description"
                      name={[field.name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Lesson description is required!",
                        },
                        {
                          max: 500,
                          message:
                            "Description must be at most 500 characters!",
                        },
                      ]}
                    >
                      <TextArea />
                    </Form.Item>
                    <Form.Item
                      label="Link"
                      name={[field.name, "link"]}
                      rules={[
                        { required: true, message: "Lesson link is required!" },
                        {
                          type: "url",
                          message: "Please enter a valid URL!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Exams">
                      <Form.List name={[field.name, "exams"]}>
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Card
                                key={subField.key}
                                title={`Question ${subField.name + 1}`}
                                size="small"
                                extra={
                                  <Button
                                    type="link"
                                    danger
                                    onClick={() => subOpt.remove(subField.name)}
                                  >
                                    Remove Exam
                                  </Button>
                                }
                              >
                                <Form.Item
                                  label="Question"
                                  name={[subField.name, "question"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input a question!",
                                    },
                                    {
                                      max: 200,
                                      message:
                                        "Question must be at most 200 characters!",
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.List name={[subField.name, "answers"]}>
                                  {(answerFields, answerOpt) => (
                                    <div>
                                      {answerFields.map((answerField) => (
                                        <div
                                          key={answerField.key}
                                          className="grid grid-cols-3 gap-2"
                                        >
                                          <Form.Item
                                            name={[answerField.name, "answer"]}
                                            rules={[
                                              {
                                                required: true,
                                                message:
                                                  "Please input an answer!",
                                              },
                                              {
                                                max: 100,
                                                message:
                                                  "Answer must be at most 100 characters!",
                                              },
                                            ]}
                                          >
                                            <Input placeholder="Answer" />
                                          </Form.Item>
                                          <Form.Item
                                            name={[answerField.name, "correct"]}
                                            rules={[
                                              {
                                                required: true,
                                                message:
                                                  "Please select the answer correctness!",
                                              },
                                            ]}
                                          >
                                            <Select
                                              options={[
                                                {
                                                  label: "Incorrect",
                                                  value: false,
                                                },
                                                { label: "Correct", value: true },
                                              ]}
                                            />
                                          </Form.Item>
                                          <Button
                                            type="link"
                                            danger
                                            onClick={() =>
                                              answerOpt.remove(answerField.name)
                                            }
                                          >
                                            Remove
                                          </Button>
                                        </div>
                                      ))}
                                      <Button
                                        type="dashed"
                                        onClick={() => answerOpt.add()}
                                        block
                                      >
                                        + Add Answer
                                      </Button>
                                    </div>
                                  )}
                                </Form.List>
                              </Card>
                            ))}
                            <Button
                              type="dashed"
                              onClick={() => subOpt.add()}
                              block
                            >
                              + Add Exam
                            </Button>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}
                <Button type="dashed" onClick={() => add()} block>
                  + Add Question
                </Button>
              </div>
            )}
          </Form.List>
          <Form.Item name="id" />
          <Button htmlType="submit" loading={loadingCreate || loadingUpdate}>
            Save
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}
