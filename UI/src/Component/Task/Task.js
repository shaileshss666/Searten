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
    render: (task) => <Link to="TaskDetail"> {task} </Link>,
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
const data = [
  {
    task: 1,
    taskname: "frontend",
    description: "monitor files and work on the project folder",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "complete",
  },
  {
    task: 2,
    taskname: "backend",
    description: "monitor files and work on the project folder",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
  {
    task: 3,
    taskname: "working on api",
    description: "monitor files and work on the project folder",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
  {
    task: 4,
    taskname: "update home",
    description: "monitor files and work on the project folder",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "complete",
  },
  {
    task: 5,
    taskname: "add task detail",
    description: "monitor files and work on the project folder",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
];

const Task: NewType = ({ navigation, auth }) => {
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
        if (
          data[i].taskname.toLowerCase().indexOf(keyword.toLowerCase()) != -1
        ) {
          // search_result.push(origin[i]);
          console.log(data[i].taskname);
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
            onClick={filter}
          />
          <Link to="CreateTask">
            <Button type="primary">+ Add Task</Button>
          </Link>
        </div>

        <Table columns={columns} dataSource={ListData} />
      </div>
    </Card>
  );
};

export default Task;
