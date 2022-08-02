import { Table, Button, Space, Card, Tooltip, Row, Col, Search } from "antd";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const chart = [
  { title: "hardware", value: 10, color: "#1434A4" },
  { title: "software", value: 15, color: "#0000FF" },
  { title: "individual", value: 20, color: "#0096FF" },
  { title: "income", value: 20, color: "#1F51FF" },
];
const menu = (
  <Menu>
    <Menu.Item>hardware</Menu.Item>
    <Menu.Item>software</Menu.Item>
    <Menu.Item>income</Menu.Item>
    <Menu.Item>individual</Menu.Item>
  </Menu>
);
const columns = [
  {
    title: "#",
    dataIndex: "num",
  },
  {
    title: "Stream",
    dataIndex: "stream",
  },

  {
    title: "Responsible",
    dataIndex: "responsible",
  },

  {
    title: "Budget",
    dataIndex: "budget",
  },
  {
    title: "Expenditure",
    dataIndex: "expenditure",
  },
  {
    title: "Remain",
    dataIndex: "remain",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i < 26; i++) {
  data.push({
    stream: "hardware",
    num: `${i}`,
    budget: `${30000 + i + 5586 + i}`,
    responsible: "john",
    remain: "body",
    expenditure: `${5000 + i + 5586}`,
  });
}
export default class Allocation extends React.Component {
  render() {
    return (
      <Card>
        <label style={{ margin: 20, fontSize: 20 }}>
          Actual Budget: 430,000 $
        </label>
        <div style={{ height: 600, overflow: "scroll" }}>
          <Table columns={columns} dataSource={data} />
        </div>
      </Card>
    );
  }
}
