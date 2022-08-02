// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Table, Button, Space, Card, Tooltip, Row, Col, Search } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Join date",
    dataIndex: "jdate",
  },

  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    name: "john",
    email: "john@gmail.com",
    status: "working",
    jdate: "10/10/2021",
    role: "developer",
  },
  {
    name: "edward",
    email: "edward@gmail.com",
    status: "working",
    jdate: "10/10/2021",
    role: "developer",
  },
  {
    name: "nick",
    email: "nick@gmail.com",
    status: "working",
    jdate: "10/10/2021",
    role: "developer",
  },
  {
    name: "sam",
    email: "sam@gmail.com",
    status: "working",
    jdate: "10/10/2021",
    role: "developer",
  },
];
// for (let i = 1; i < 6; i++) {
//   data.push({
//     name: "john",
//     email: "edward@gmail.com",
//     status: "working..",
//     Jdate: `${i}/${i}/2021`,
//     role: `developer`,
//   });
// }
const Member: React.FC = ({ navigation, auth }) => {
  const [ListData, setListData] = useState(data);
  const [inputText, setInputText] = useState("");
  const filter = (e: any) => {
    const keyword = e.target.value;
    // console.log("text", keyword);
    let arr = [];
    if (keyword != "") {
      // const results = data.filter((user) => user.taskname == keyword);
      for (let i in data) {
        if (data[i].name.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
          // search_result.push(origin[i]);
          console.log(data[i].name);
          arr.push(data[i]);
        }
      }
      setListData(arr);
    } else {
      setListData(data);
      console.log(ListData, "without text");
    }
  };
  // render() {
  //   const { loading, selectedRowKeys } = this.state;
  //   const rowSelection = {
  //     selectedRowKeys,
  //     onChange: this.onSelectChange,
  //   };
  //   const hasSelected = selectedRowKeys.length > 0;
  return (
    <Card>
      <div style={{ height: 600, overflow: "scroll" }}>
        <div>
          <input style={{ width: "300px" }} onChange={(text) => filter(text)} />
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
          <Link to="AddMember">
            <Button type="primary">+ Add Member</Button>
          </Link>
        </div>

        <Table columns={columns} dataSource={ListData} />
      </div>
    </Card>
  );
};

export default Member;
