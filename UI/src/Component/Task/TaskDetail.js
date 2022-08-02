import React from "react";
import { Card } from "antd";
import { Menu, Dropdown, Button, Space, DatePicker } from "antd";
import { Row, Col } from "antd";
import upload_button_props from "../Upload_Button/Upload_Button";
import history from "../../history";
import { FileTextTwoTone, UserOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
  history.push("/projectmanagement");
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const menu = (
  <Menu>
    <Menu.Item>Pending </Menu.Item>
    <Menu.Item>Ongoing</Menu.Item>
    <Menu.Item>Completed</Menu.Item>
  </Menu>
);
export default (props) => {
  // console.log("///////", props);
  return (
    <div>
      <Row style={{ height: 600, overflow: "scroll" }}>
        <Col span={16}>
          <Card>
            <Row>
              <Card title="Task 1">
                <p>
                  Card content xxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
                <DatePicker /> <DatePicker />
              </Card>
            </Row>
            <Row span={16}>
              <Card title="Files" bordered={false}>
                <FileTextTwoTone
                  title="document"
                  style={{ fontSize: "40px", color: "#08c" }}
                ></FileTextTwoTone>
                <FileTextTwoTone
                  title="document"
                  style={{ fontSize: "40px", color: "#08c", margin: 10 }}
                ></FileTextTwoTone>
              </Card>
            </Row>

            {/* <Card title="Comments">
              <UserOutlined style={{ padding: 10 }}></UserOutlined>
              <input
                style={{
                  borderbottom: "1px solid black",
                  backgroundColor: "red",
                }}
              />
              <a style={{ padding: 10 }}>save</a>
            </Card> */}
            {/* reply form 
             <form class="ui reply form">
              <div class="field">
                <textarea></textarea>
              </div>
              <div class="ui primary submit labeled icon button">
                <i class="icon edit"></i> Add Reply
              </div>
            </form> */}
            <div class="ui comments">
              <div class="comment">
                <div class="comment">
                  <a class="avatar">
                    <img src="\Component\logo\Black and White Squares Industrial Logo white .png" />
                  </a>
                  <div class="content">
                    <a class="author">Christian Rocha</a>
                    <div class="metadata">
                      <div class="date">2 days ago</div>
                    </div>
                    <div class="text">I re-tweeted this.</div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <form class="ui reply form">
                  <div class="field">
                    <textarea></textarea>
                  </div>
                  <div class="ui primary submit labeled icon button">
                    <i class="icon edit"></i> Add Comment
                  </div>
                </form>
              </div>
            </div>

            <Card title="shailesh" style={{}}>
              <p>good work</p>
              <a style={{ padding: 10 }}>Remove</a>
            </Card>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Card style={{ padding: "10px", textAlign: "center" }}>
              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                style={{ align: "center" }}
              >
                <Button
                  type="primary"
                  style={{ width: "100px", margin: "10px 10px 100px 10px" }}
                >
                  Action
                </Button>
              </Dropdown>
            </Card>

            <Card style={{ textAlign: "center", margin: 10 }}>
              <Button
                type="primary"
                style={{ textAlign: "center", margin: 5, width: "100px" }}
              >
                {" "}
                Member
              </Button>
              <br />
              <Button
                type="primary"
                style={{ textAlign: "center", margin: 5, width: "100px" }}
              >
                {" "}
                File
              </Button>
              <br />
              <Button
                type="primary"
                style={{ textAlign: "center", margin: 5, width: "100px" }}
              >
                {" "}
                Task Detail
              </Button>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
