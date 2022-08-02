import { Table, Button, Space, Card, Tooltip, Row, Col, Search } from "antd";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
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
    title: "Items",
    dataIndex: "items",
  },

  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Mem ber",
    dataIndex: "member",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    items: "software",
    amount: 3000,
    date: "4/11/2021",
    member: "usyd",
  },
  {
    items: "hardware",
    amount: 4000,
    date: "2/11/2021",
    member: "usyd",
  },
  {
    items: "salary",
    amount: 5000,
    date: "6/11/2021",
    member: "usyd",
  },
  {
    items: "components",
    amount: 3500,
    date: "8/11/2021",
    member: "usyd",
  },
  {
    items: "software",
    amount: 4500,
    date: "10/11/2021",
    member: "usyd",
  },
];

// const data = [];
// for (let i = 1; i < 26; i++) {
//   data.push({
//     item: "hardware",

//     amount: `${30000 + i + 5586 + i}`,
//     date: `${i}/${i}/2021`,
//     member: `usyd`,
//   });
// }
const Overview: React.FC = ({ navigation, auth }) => {
  const [ListData, setListData] = useState(data);
  const [inputText, setInputText] = useState("");
  const filter = (e: any) => {
    const keyword = e.target.value;
    // console.log("text", keyword);
    let arr = [];
    if (keyword != "") {
      // const results = data.filter((user) => user.taskname == keyword);
      for (let i in data) {
        if (data[i].items.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
          // search_result.push(origin[i]);
          console.log(data[i].items);
          arr.push(data[i]);
        }
      }
      setListData(arr);
    } else {
      setListData(data);
      console.log(ListData, "without text");
    }
  };

  return (
    <Card>
      <div style={{ height: 600, overflow: "scroll" }}>
        <Row>
          <label style={{ margin: 10, fontSize: 20 }}>
            Actual Budget: 430,000 $
          </label>

          <label style={{ margin: 10, fontSize: 20 }}>
            Expected Budget: 500,000
          </label>

          <label style={{ margin: 10, fontSize: 20 }}>
            Expenditure: 80,000
          </label>
        </Row>
        <Row>
          <div>
            <input
              style={{ width: "300px" }}
              onChange={(text) => filter(text)}
            />
            <Tooltip title="search">
              <Button
                shape="circle"
                icon={<SearchOutlined />}
                style={{ margin: "10px" }}
              />
            </Tooltip>
            <FilterOutlined
              style={{ fontSize: 25, margin: "0px 10px 0px 0px" }}
            />
            <Link to="AddOverview">
              <Button type="primary">+ </Button>
            </Link>
          </div>
        </Row>
        <Row>
          <Col span={16}>
            <Table columns={columns} dataSource={ListData} />
          </Col>
          <Col span={8}>
            <Row>
              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                style={{ align: "center" }}
              >
                <Button
                  type="primary"
                  style={{ width: "100px", margin: "10px" }}
                >
                  spending
                </Button>
              </Dropdown>
            </Row>
            <Row>
              <PieChart radius={30} data={chart} />
            </Row>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default Overview;
