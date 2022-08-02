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

const AddMember = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [Join_date, setJoin_date] = useState("");
  const [end_date, setend_date] = useState("");

  const onFinish = (values) => {
    console.log(values, Join_date, end_date);
  };

  return (
    <Card>
      <h1 style={{ textAlign: "center", margin: "10px 10px 40px" }}>
        {" "}
        Add Member
      </h1>
      <Form
        name="Addname"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["Name", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(text) => setName(text.target.value)} />
        </Form.Item>
        <Form.Item name="Role" label="Role">
          <Input onChange={(text) => setRole(text.target.value)} />
        </Form.Item>
        <Form.Item name="Email" label="Email">
          <Input onCanPlay={(text) => setEmail(text.target.value)} />
        </Form.Item>
        <div>
          <Form.Item label="Join-Date">
            <DatePicker
              onChange={(date) =>
                setJoin_date(moment(date._d).format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
        </div>
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

export default AddMember;
