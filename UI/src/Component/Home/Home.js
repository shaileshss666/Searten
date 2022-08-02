import React from "react";
import { Button, Card, Row, Col, Table } from "antd";
import Chart from "react-google-charts";
import DGauge from "./DGauge";

const columns = [
  {
    title: "Task",

    dataIndex: "task",
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
    title: "Due Date",
    dataIndex: "DDate",
  },
];
const data = [
  {
    task: 1,
    taskname: "monitoring",
    description: "monitor files and work ",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working..",
  },
  {
    task: 3,
    taskname: "hello",
    description: "monitor files and work ",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
  {
    task: 4,
    taskname: "jayesh",
    description: "monitor files and work",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
  {
    task: 5,
    taskname: "vaibhav",
    description: "monitor files and work on",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
  {
    task: 6,
    taskname: "shailesh",
    description: "monitor files and work ",
    SDate: `12/10/2021`,
    DDate: `12/11/2021`,
    status: "working",
  },
];
function Home() {
  return (
    <Card>
      <Row style={{ height: 600, overflow: "scroll" }}>
        <Col span={18}>
          <Row>
            <Col
              span={12}
              style={{ justifyContent: "flex-start", height: 300 }}
            >
              <Chart
                width={"300px"}
                height={"300px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                  ["spendings", "budget"],
                  ["allocated budget", 30000],
                  ["expenditure ", 11070],
                  ["expected amount", 66000],
                ]}
                options={{
                  // Material design options
                  chart: {
                    title: "Project Budget",
                    subtitle: "",
                  },
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
              />
            </Col>
            <Col
              style={{
                justifyContent: "center",
                height: 280,
                backgroundColor: "",
              }}
              span={12}
            >
              <DGauge style={{}} />
            </Col>
          </Row>
          <Row style={{ heigh: 100 }}>
            <Card title="Upcoming Task" style={{ textAlign: "center" }}>
              <Table columns={columns} dataSource={data}></Table>
            </Card>
          </Row>
        </Col>
        <Col span={6}>
          <Card style={{ textAlign: "center", backgroundColor: "#98fb98" }}>
            <h2>project launch date</h2>
            <p>12/10/21</p>
            <h3>120 days left</h3>
          </Card>
          <Card>
            <h2>project summary</h2>
            <p>Start date: 2021/8/5</p>
            <p>End date: 2021/12/30</p>
            <p>Project Leader : Nier</p>
            <p>Overall Status : in Time</p>
          </Card>
          <Card>
            <h2>members</h2>
            <p>
              <b>Project Leader : </b>Nier
            </p>
            <p>
              <b> team members</b>
            </p>
            <p>shailesh</p>
            <p>shubham</p>
            <p>lin</p>
            <p>yang</p>
          </Card>
          <Button />
          <Button
            type="primary"
            shape="round"
            style={{
              width: 150,
              height: 60,
              float: "left",
              fontSize: 25,
              margin: 8,
            }}
          >
            Processing
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
export default Home;
