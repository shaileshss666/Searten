// eslint-disable-next-line
import React, { useState } from "react";
import AddGrant from "./AddGrant";

import { Link } from "react-router-dom";
import { Table, Button, Space, Row, Tooltip, Col, Card } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "#",
    dataIndex: "Num",
  },
  {
    title: "Grant",
    dataIndex: "grant",
  },
  {
    title: "Grantor",
    dataIndex: "grantor",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Operation",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Cancel</a>
      </Space>
    ),
  },
];
const data = [
  {
    Num: 1,
    grant: "R1 grant",
    grantor: "Govt",
    amount: 30000,
    status: "Applying",
    date: "1/11/2021",
    role: "developer",
  },

  {
    Num: 2,
    grant: "R2 grant",
    grantor: "Govt",
    amount: 40000,
    status: "Applying",
    date: "3/11/2021",
    role: "developer",
  },

  {
    Num: 3,
    grant: "R3 grant",
    grantor: "Govt",
    amount: 35000,
    status: "Applying",
    date: "6/11/2021",
    role: "developer",
  },

  {
    Num: 4,
    grant: "R4 grant",
    grantor: "Govt",
    amount: 50000,
    status: "Applying",
    date: "8/11/2021",
    role: "developer",
  },

  {
    Num: 5,
    grant: "R5 grant",
    grantor: "Govt",
    amount: 60000,
    status: "Applying",
    date: "11/11/2021",
    role: "developer",
  },
];
// const data = [];
// for (let i = 1; i < 16; i++) {
//   data.push({
//     grant: "R1 grant",
//     grantor: "Govt",
//     amount: `${30000 + i + 5586 + i}`,
//     status: "Applying",
//     date: `${i + 1}/${i}/2021`,
//     role: `developer`,
//   });
// }
const Grant: React.FC = ({ navigation, auth }) => {
  const [ListData, setListData] = useState(data);
  const [inputText, setInputText] = useState("");
  // for (let i = 1; i < 18; i++) {
  //   data.push({
  //     task: `${i}`,
  //     taskname: "monitoring",
  //     description: "monitor files and work on the project folder",
  //     SDate: `${i}/${i}/2021`,
  //     DDate: `${i}/${i + 1}/2021`,
  //     status: "complete",
  //   });
  // }

  const filter = (e: any) => {
    const keyword = e.target.value;
    // console.log("text", keyword);
    let arr = [];
    if (keyword != "") {
      // const results = data.filter((user) => user.taskname == keyword);
      for (let i in data) {
        if (data[i].grant.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
          // search_result.push(origin[i]);
          console.log(data[i].grant);
          arr.push(data[i]);
        }
      }
      setListData(arr);
    } else {
      setListData(data);
      console.log(ListData, "without text");
    }
  };
  const submit = () => {
    console.log("insubmiy");
  };
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
          <Link to="AddGrant">
            <Button type="primary">+ Add Grant</Button>
          </Link>
        </div>

        <Table columns={columns} dataSource={ListData} />
      </div>
    </Card>
  );
};
export default Grant;
