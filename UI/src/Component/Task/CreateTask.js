/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, DatePicker, Card } from "antd";
import moment from "moment";

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
const submit = () => {
  alert("Task added");
};
const CreateTask = () => {
  const [start_date, setstart_date] = useState("");
  const [end_date, setend_date] = useState("");
  const onFinish = (values) => {
    console.log(values, start_date, end_date);
    alert("Task added");
  };

  return (
    <Card>
      <h1 style={{ textAlign: "center", margin: "10px 10px 40px" }}>
        {" "}
        Add Task
      </h1>
      <Form
        name="Taskname"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["Task", "task"]}
          label="Task "
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="Description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="stream" label="stream ">
          <Input />
        </Form.Item>
        <div>
          <Form.Item label="Start-Date">
            <DatePicker
              onChange={(date) =>
                setstart_date(moment(date._d).format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="End-Date">
            <DatePicker
              onChange={(date) =>
                setend_date(moment(date._d).format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
        </div>
        <Form.Item name="Budget" label="Expected-Budget">
          <InputNumber />
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

export default CreateTask;
