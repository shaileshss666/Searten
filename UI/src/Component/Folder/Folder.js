import React from "react";
import FolderCard from "./FolderCard";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import upload_button_props from "../Upload_Button/Upload_Button";

import { Link } from "react-router-dom";

import { Button, Row, Tooltip, Col, Card } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
const props = {
  // name: "file",
  // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  // headers: {
  //   authorization: "authorization-text",
  // },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log("lllllllupload file", info.file, info.fileList);
    }
    // if (info.file.status === "done") {
    //   message.success(`${info.file.name} file uploaded successfully`);
    // } else if (info.file.status === "error") {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
};

function Folder() {
  return (
    <div>
      <Card style={{ height: 650, overflow: "scroll" }}>
        <h1 style={{ textAlign: "center", padding: 10 }}>All Folders</h1>
        {/* 
        <div
          style={{
            heigh: 80,
            width: "500px",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            border: "1px solid black",
          }}
        >
          <input style={{ border: 0 }} />
        </div> */}
        <input style={{ width: "500px", margin: 10 }} />
        <Tooltip title="search">
          <Button
            shape="circle"
            icon={<SearchOutlined />}
            style={{ margin: 10 }}
          />
        </Tooltip>
        <FilterOutlined style={{ fontSize: 28, marginRight: 10 }} />
        <Upload {...upload_button_props}>
          <Button icon={<UploadOutlined />} type="primary">
            {" "}
            Add Document
          </Button>
        </Upload>

        <p>
          {/* <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard /> */}
        </p>
      </Card>
    </div>
  );
}

export default Folder;
