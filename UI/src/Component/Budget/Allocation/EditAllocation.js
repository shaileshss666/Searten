/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Form, Input, InputNumber, Button, DatePicker, Card } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const EditAllocation = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Card>
      <h1 style={{ textAlign: "center", margin: "10px 10px 40px" }}>
        Allocation
      </h1>
      <Form
        name="Taskname"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["Title", "title"]}
          label="stream"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="responsible" label="Responsible">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="budget" label="Budget">
          <InputNumber />
        </Form.Item>
        <Form.Item name="expenditure" label="Expenditure">
          <InputNumber />
        </Form.Item>
        <Form.Item name="remain" label="Remain">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" style={{ margin: "3px" }}>
            Submit
          </Button>
          <Button type="primary" htmlType="submit" style={{ margin: "3px" }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EditAllocation;
