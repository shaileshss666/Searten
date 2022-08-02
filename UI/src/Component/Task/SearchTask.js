import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Table, Button, Space, Card, Tooltip, Row, Col, Search } from "antd";
import TaskDetail from "./TaskDetail";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Task",
    key: "task",
    dataIndex: "task",

    render: (task) => <Link to="TaskDetail">{task} </Link>,
  },
  {
    title: "Task Name",
    dataIndex: "taskname",
  },
  {
    title: "Description",
    dataIndex: "description",
  },

  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Start Date",
    dataIndex: "SDate",
  },
  {
    title: "Due Date",
    dataIndex: "DDate",
  },
  {
    title: "Action",
    key: "action",
    render: (text) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const columns1 = [
  {
    title: "Task Name",
    dataIndex: "taskname",
  },
  {
    title: "Description",
    dataIndex: "description",
  },

  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Start Date",
    dataIndex: "SDate",
  },
  {
    title: "Due Date",
    dataIndex: "DDate",
  },
];
const SearchTask: React.FC = ({ navigation, auth }) => {
  const [ListData, setListData] = useState("");
  const data = [];
  for (let i = 1; i < 18; i++) {
    data.push({
      task: `${i}`,
      taskname: "monitoring",
      description: "monitor files and work on the project folder",
      SDate: `${i}/${i}/2021`,
      DDate: `${i}/${i + 1}/2021`,
      status: "complete",
    });
  }

  filter = (e) => {
    const keyword = e;
    console.log("text", e);
    if (keyword != "") {
      const results = columns1.filter((user) => {
        return user.title.startsWith(keyword);
      });
      setListData(results);
      console.log(results, "with text");
    } else {
      setListData(columns);
      console.log(ListData, "without text");
    }
  };

  return (
    <Card>
      <div style={{ height: 600, overflow: "scroll" }}>
        <div>
          <input style={{ width: "300px" }} onChange={this.filter} />
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
          <Link to="CreateTask">
            <Button type="primary">+ Add Task</Button>
          </Link>
        </div>

        <Table columns={columns} dataSource={data} />
      </div>
    </Card>
  );
};

export default SearchTask;
