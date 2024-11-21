"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { GetAdminQuizList } from "@/services/modules/admin/quiz/getQuizList.service";
import { AddAdminUser } from "@/services/modules/admin/user/addUser.service";
import { UpdateAdminUser } from "@/services/modules/admin/user/updateUser.service";
import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  message,
  Space,
  Table,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
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
  const { loadingUserCreateAdmin } = useAppSelector(
    (state) => state.AddAdminUserReducer
  );
  const { loadingUpdateUsers } = useAppSelector(
    (state) => state.updateAdminUserReducer
  );
  useEffect(() => {
    dispatch(GetAdminQuizList({ page_size: 10, page_number: pageNum }));
    console.log(pageNum);
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
      width: 100,
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
        dataSource={quiz}
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
          <Form.List name="quistions">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Item ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <Button
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        remove
                      </Button>
                    }
                  >
                    <Form.Item label="Question" name={[field.name, "question"]}>
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
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
                                >
                                  <Input placeholder="Answer" />
                                </Form.Item>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "point"]}
                                >
                                  <Input placeholder="Point" />
                                </Form.Item>
                                <Button
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                >
                                  remove answer
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

                <Button type="dashed" onClick={() => add()} block>
                  + Add Quistion
                </Button>
              </div>
            )}
          </Form.List>

          <Form.Item noStyle shouldUpdate>
            {() => (
              <Typography>
                <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
              </Typography>
            )}
          </Form.Item>
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
