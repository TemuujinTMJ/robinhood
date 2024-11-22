"use client";
import Header from "@/components/Header";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { UpdatePipList } from "@/services/modules/admin/pip/updatePipList.service";
import { GetPipPairList } from "@/services/modules/user/pip-calculator/getPipCurrencyPair.service";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Spin
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

export default function PipCalculatorPairs() {
  const dispatch = useAppDispatch();
  const [form] = useForm();
  const { pipPairs, loadingPipPairs } = useAppSelector(
    (state) => state.GetPipPairs
  );
  const { updatePipLoading } = useAppSelector(
    (state) => state.UpdatePipMuliple
  );

  useEffect(() => {
    dispatch(GetPipPairList()).then((response) => {
      const currencies = response.payload?.currencies || {};
      const pairsArray = Object.entries(currencies).map(
        ([pair, coefficient]) => ({
          pair,
          coefficient,
        })
      );
      form.setFieldsValue({ pairs: pairsArray });
    });
  }, [dispatch, form]);

  const onFinish = (values: any) => {
    const pairsObject = values.pairs.reduce(
      (
        acc: Record<string, number>,
        { pair, coefficient }: { pair: string; coefficient: number }
      ) => {
        acc[pair] = coefficient;
        return acc;
      },
      {}
    );

    dispatch(UpdatePipList({pairs: pairsObject})).then((e) => {
      if (e.payload.success) {
        message.success("Pairs updated successfully!");
      } else {
        message.error("Failed to update pairs.");
      }
    });
  };

  return (
    <div>
      <Header
        title={`Pip calculator pairs (${Object.keys(pipPairs).length})`}
      />
      {loadingPipPairs ? (
        <Spin />
      ) : (
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          name="pip_calculator_pairs"
          autoComplete="off"
          onFinish={onFinish}
          className="flex justify-center w-full"
        >
          <Form.List name="pairs">
            {(fields, { add, remove }) => (
              <div className="flex flex-wrap">
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className="flex gap-2 w-[450px] justify-end">
                    <Form.Item
                      {...restField}
                      label={key + 1}
                      name={[name, "pair"]}
                      rules={[
                        {
                          required: true,
                          message: "Currency pair is required",
                        },
                      ]}
                    >
                      <Input placeholder="e.g., AUD/CAD" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "coefficient"]}
                      rules={[
                        { required: true, message: "Coefficient is required" },
                        {
                          type: "number",
                          transform: (value) => parseFloat(value),
                          message: "Must be a number",
                        },
                      ]}
                    >
                      <InputNumber type="number" placeholder="e.g., 7.26" />
                    </Form.Item>
                    <Button
                      danger
                      ghost
                      type="link"
                      onClick={() => remove(name)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}

                <div className="flex w-full justify-between">
                  <Button type="dashed" onClick={() => add()}>
                    + Add Pair
                  </Button>
                  <Button
                    htmlType="submit"
                    loading={updatePipLoading}
                    type="primary"
                    className="mt-2"
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}
          </Form.List>
        </Form>
      )}
    </div>
  );
}
