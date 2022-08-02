import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  Avatar,
  Tag,
  Space,
  Progress,
  Card,
  Typography,
  Row,
  Col,
  Input,
  Radio,
  Select,
} from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import axios from "axios";
import {
  SortAscendingOutlined,
  FilterOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import moment from "moment";
import history from '../../history';

import "../../mock/projectmanagement"; //mock data

import { subject_code } from "../../sources/dataset/data";
import Action_List from "../Action_List/Action_List";
import cookie from 'react-cookies';

const { Search } = Input;
const { Paragraph } = Typography;
const { Option } = Select;

//---------------------------------------------------Transfer subject Code->Label---------------------------------------------------------------

function transfer_subject_lable(code) {
  for (var i = 0; i < subject_code.length; i++) {
    if (code === subject_code[i].value) {
      return subject_code[i].label;
    }
  }
}

var subject_list = [{ value: "000", label: "---Subject---" }];
for (var i = 0; i < subject_code.length; i++) {
  subject_list.push(subject_code[i]);
}

//---------------------------------------------------Object Sort Function---------------------------------------------------------------
function compareNumber(p) {
  //这是比较函数
  return function (m, n) {
    var a = m[p];
    var b = n[p];
    var c = a - b;
    return a - b; //升序
  };
}

function compareString(p) {
  return function (m, n) {
    var a = m[p];
    var b = n[p];
    var c = a > b;
    if (c) {
      return 1;
    } else {
      return -1;
    }
  }; //升序
}

function compareDate(p) {
  return function (m, n) {
    var a = m[p];
    var b = n[p];
    var c = moment(a, "DD/MM/YYYY").isAfter(moment(b, "DD/MM/YYYY"));
    if (c) {
      return 1;
    } else {
      return -1;
    }
  }; //升序
}

function compareStartDate(p) {
  return function (m, n) {
    var a = m[p].start_date;
    var b = n[p].start_date;
    var c = moment(a, "DD/MM/YYYY").isAfter(moment(b, "DD/MM/YYYY"));
    if (c) {
      return 1;
    } else {
      return -1;
    }
  }; //升序
}

function compareEndDate(p) {
  return function (m, n) {
    var a = m[p].end_date;
    var b = n[p].end_date;
    var c = moment(a, "DD/MM/YYYY").isAfter(moment(b, "DD/MM/YYYY"));
    if (c) {
      return 1;
    } else {
      return -1;
    }
  }; //升序
}

//---------------------------------------------------Object Sort Function End---------------------------------------------------------------

export default class ProjectList extends React.Component {
  state = {
    actionlist: [],
    listData_origin: [],
    listData: [],
    searchKeyword: "",
    searchList: [],
    isSearched: false,
    isSortBar: false,
    sortKeyword: "create_date",
    isFilterBar: false,
    filter01_keyword: "000",
  };

  componentDidMount(preProps, preState, preFilterKeyword) {
    if(cookie.load('userId')){
    axios.post("/projectmanagement",{'userId':cookie.load('userId')})
      .then((res) => {
        if(res.data.status===0){
          this.setState({
            listData_origin: res.data.dataset.projectlist,
            listData: res.data.dataset.projectlist,
            actionlist: res.data.dataset.actionlist,
          });
        }else{
          alert(res.data.result)
          this.setState({
            listData_origin: res.data.dataset.projectlist,
            listData: res.data.dateset.projectlist,
            actionlist: res.data.dataset.actionlist,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      alert("Please Login");
    }
  }

  onSearch = (value) => {
    if (value === "") {
      if (this.state.listData === this.state.listData_origin) {
        console.log("数据原本就没变");
        return;
      } else {
        var origin = this.state.listData_origin;
        this.setState({
          listData: origin,
          sortKeyword: "default_sort",
          searchKeyword: value,
          isSearched: false,
          searchList: [],
          filter01_keyword: "000",
        });
        console.log("应该还原数据");
        return;
      }
    } else {
      let search_result = [];
      var origin = this.state.listData_origin;
      console.log("长度：" + origin[1].title);
      for (var i = 0; i < origin.length; i++) {
        if (origin[i].title.toLowerCase().indexOf(value.toLowerCase()) != -1) {
          search_result.push(origin[i]);
        }
      }
      this.setState({
        listData: search_result,
        sortKeyword: "default_sort",
        searchKeyword: value,
        isSearched: true,
        searchList: search_result,
        filter01_keyword: "000",
      });
      console.log("搜索完成：" + search_result);
    }
  };

  onSortlist = (value) => {
    this.setState({ isSortBar: !this.state.isSortBar });
  };

  onSortKey = (e) => {
    let data_need_sort = this.state.listData;
    switch (e.target.value) {
      case "title":
        console.log("按title排序");
        data_need_sort.sort(compareString("title"));
        this.setState({ listData: data_need_sort, sortKeyword: "title" });
        break;
      case "start_date":
        console.log("按start_date排序");
        data_need_sort.sort(compareStartDate("date"));
        this.setState({ listData: data_need_sort, sortKeyword: "start_date" });
        break;
      case "end_date":
        console.log("按end_date排序");
        data_need_sort.sort(compareEndDate("date"));
        this.setState({ listData: data_need_sort, sortKeyword: "end_date" });
        break;
      case "progress":
        data_need_sort.sort(compareNumber("percent"));
        this.setState({ listData: data_need_sort, sortKeyword: "progress" });
        break;
      case "last_edit":
        console.log("按last_edit排序");
        data_need_sort.sort(compareDate("last_edit"));
        this.setState({ listData: data_need_sort, sortKeyword: "last_edit" });
        break;
      case "create_date":
        console.log("按create_date排序");
        data_need_sort.sort(compareDate("create_date"));
        this.setState({ listData: data_need_sort, sortKeyword: "create_date" });
        break;
    }
  };

  onFilterlist = (value) => {
    this.setState({ isFilterBar: !this.state.isFilterBar });
  };

  onFilterSubject = (value) => {
    var subject_id = value;
    console.log("searchlist: " + this.state.isSearched);
    if (this.state.listData === this.state.listData_origin) {
      console.log("筛选元数据：未经处理");
      var date_need_filter = this.state.listData_origin;
    } else if (this.state.isSearched === false) {
      var date_need_filter = this.state.listData_origin;
      console.log("筛选元数据：未经搜索 经过筛选");
    } else {
      var date_need_filter = this.state.searchList;
      console.log("筛选元数据：经过搜索 无关筛选");
    }
    var filter_result = [];
    if (subject_id === "000") {
      filter_result = date_need_filter;
    } else {
      for (var i = 0; i < date_need_filter.length; i++) {
        if (
          date_need_filter[i].subjects.s1 === subject_id ||
          date_need_filter[i].subjects.s2 === subject_id ||
          date_need_filter[i].subjects.s3 === subject_id
        ) {
          filter_result.push(date_need_filter[i]);
        }
      }
    }

    this.setState({
      filter01_keyword: value,
      listData: filter_result,
      sortKeyword: "default_sort",
    });
    console.log("筛选完成:" + filter_result);
  };

  render() {
    return (
      <PageContainer
        title={<h1>Project List</h1>}
        ghost={true}
        content={
          <Row gutter={24}>
            <Col xl={18} lg={24} md={24} sm={24} xs={24}>
              <Row>
                <Col flex={1}>
                  <Card>
                    <Row gutter={24}>
                      <Col flex={1}>
                        <Search
                          ref="project_list_search"
                          placeholder="input search text"
                          onSearch={this.onSearch}
                          allowClear
                        />
                      </Col>
                      <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                        <SortAscendingOutlined
                          style={{ fontSize: 30 }}
                          onClick={this.onSortlist}
                        />
                      </Col>
                      <Col xl={1} lg={1} md={1} sm={1} xs={1}>
                        <FilterOutlined
                          style={{ fontSize: 30 }}
                          onClick={this.onFilterlist}
                        />
                      </Col>
                      <Col xl={1} lg={1} md={1} sm={1} xs={1} offset={2}>
                        <Link to="/projectmanagement/newproject">
                          {" "}
                          <PlusSquareOutlined style={{ fontSize: 30 }} />
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              {this.state.isSortBar == true && (
                <Row>
                  <Col flex={1}>
                    <Card>
                      <span>Sort By : </span>
                      <Radio.Group
                        onChange={this.onSortKey}
                        defaultValue={this.state.sortKeyword}
                        value={this.state.sortKeyword}
                      >
                        <Radio.Button value="default_sort" disabled>
                          Default
                        </Radio.Button>
                        <Radio.Button value="create_date">
                          Create Date
                        </Radio.Button>
                        <Radio.Button value="last_edit">Last Edit</Radio.Button>
                        <Radio.Button value="progress">Progress</Radio.Button>
                        <Radio.Button value="title">Title</Radio.Button>
                        <Radio.Button value="start_date">
                          Start Date
                        </Radio.Button>
                        <Radio.Button value="end_date">End Date</Radio.Button>
                      </Radio.Group>
                    </Card>
                  </Col>
                </Row>
              )}
              {this.state.isFilterBar == true && (
                <Row>
                  <Col flex={1}>
                    <Card>
                      <span>Filter : </span>
                      <Select
                        style={{ width: 200 }}
                        showSearch
                        placeholder="Select a Subject"
                        options={subject_list}
                        onChange={this.onFilterSubject}
                        name="filter_subject"
                        label="Subjects "
                        defaultValue={this.state.filter01_keyword}
                        value={this.state.filter01_keyword}
                      />
                    </Card>
                  </Col>
                </Row>
              )}
              <br />
              <Row>
                <Col flex={1}>
                  <Card>
                    <List
                      itemLayout="vertical"
                      size="large"
                      pagination={{
                        showSizeChanger: false,
                        onChange: (page) => {
                          console.log(page);
                        },
                        pageSize: 5,
                      }}
                      dataSource={this.state.listData} //------------------------dataSource 在这里 应该可以用search 更新
                      renderItem={(item) => (
                        <List.Item
                          key={item.title}
                          extra={
                            <Progress
                              type="circle"
                              strokeColor={{
                                "0%": "#108ee9",
                                "100%": "#87d068",
                              }}
                              percent={item.percent}
                            />
                          }
                        >
                          <List.Item.Meta
                            avatar={
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={
                              <Space size="small">
                                <Link to={"/projectmanagement/project/"+item.projectId}>{item.title}</Link>
                                <Tag color="green">
                                  {transfer_subject_lable(item.subjects.s1)}
                                </Tag>
                                {item.subjects.s2 == "" ? null : (
                                  <Tag color="green">
                                    {transfer_subject_lable(item.subjects.s2)}
                                  </Tag>
                                )}
                                {item.subjects.s3 == "" ? null : (
                                  <Tag color="green">
                                    {transfer_subject_lable(item.subjects.s3)}
                                  </Tag>
                                )}
                              </Space>
                            }
                            description={
                              <p>
                                {" "}
                                TimeLine: {item.date.start_date} -{" "}
                                {item.date.end_date}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create
                                : {item.create_date} &nbsp; Edit :{" "}
                                {item.last_edit}
                              </p>
                            }
                          />
                          <Paragraph
                            ellipsis={
                              true
                                ? {
                                    rows: 2,
                                    expandable: true,
                                    symbol: "more",
                                  }
                                : false
                            }
                          >
                            {item.content}
                          </Paragraph>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xl={5} lg={24} md={24} sm={24} xs={24}>
              <Card>
                <h2>Action list</h2>
                <Action_List
                  current_pageSize={12}
                  actionlist={this.state.actionlist}
                />
              </Card>
            </Col>
          </Row>
        }
      ></PageContainer>
    );
  }
}
