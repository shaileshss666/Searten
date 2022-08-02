import React from 'react';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormDigit,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { FooterToolbar } from '@ant-design/pro-layout';
import { Card, InputNumber, Upload, Button, Input, Select } from 'antd';
import { UploadOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import upload_button_props from '../Upload_Button/Upload_Button'
import history from '../../history';
import axios from 'axios'
import { subject_code } from '../../sources/dataset/data'
import cookie from 'react-cookies';

import '../../mock/newproject'


//-------------------------------------------------------------Subject Selections-------------------------------------------------------------

var subject_code_2;
var subject_code_3;

//-------------------------------------------------------------Subject Selections End-------------------------------------------------------------






export default class Newproject extends React.Component {


  state = {
    outcomesLines: ["outcome"],
    outcomesList: [],
    membersLines: ["members"],
    membersList: [],
    isSubject02: false,
    isSubject03: false,
    subjectSelect2: null,
    subjectSelect3: null,
  }



  onFinish = (values) => {
    values.subject_2 = this.state.subjectSelect2;
    values.subject_3 = this.state.subjectSelect3;
    console.log('Success:', values);
    alert("Success: Create New Project")

    var sendData = { ...values, "outcomes": this.state.outcomesList, "members": this.state.membersList }

    axios.post('/projectmanagement/newproject', sendData).then(res => {
      console.log(JSON.stringify(res.data.dataset))
    }).catch((err) => {
      console.log(err)
    })
    history.push("/projectmanagement")

  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  onReset = () => {
    this.setState({
      outcomesLines: ["outcome"],
      outcomesList: [],
      membersLines: ["members"],
      membersList: [],
      isSubject02: false,
      isSubject03: false,
      subjectSelect2: null,
      subjectSelect3: null,
    })
  }

  isExistingTitle = (cnode) => {
    var inputTitle = cnode.target.value;
    console.log(inputTitle);
  }



  addMembersLine = () => {
    let newMembers = this.state.membersLines;
    newMembers.push("members")
    this.setState({ membersLines: newMembers})
  }

  handleMembers = () => {
    var membersList = [];
    this.state.membersLines.map((item, index) => {
      var memberskey = "membersinput" + index;
      
      var currentValue = document.getElementById(memberskey).value
      if (currentValue != "") { membersList.push(currentValue) }
    })
    this.setState({ membersList: membersList })
  }

  handleIsMembers = (cnode) => {
    var inputEmail=cnode.target.value;
    console.log(inputEmail);
  }


  addOutcomeLine = () => {
    let newOutcomes = this.state.outcomesLines;
    newOutcomes.push("outcome")
    this.setState({ outcomesLines: newOutcomes})

  }

  handleOutcome = () => {
    var outcomesList = [];
    this.state.outcomesLines.map((item, index) => {
      var outcomekey = "outcomeinput" + index;
      var currentValue = document.getElementById(outcomekey).value
      if (currentValue != "") { outcomesList.push(currentValue) }
    })
    this.setState({ outcomesList: outcomesList })
  }


  handleSubject01 = (event) => {
    if (event) {
      subject_code_2 = subject_code.slice();
      subject_code_2.push({ value: null, label: "" })
      subject_code.map((e, index) => {
        if (e.value === event) {
          subject_code_2.splice(index, 1)
          return
        }
      })
      this.setState({ isSubject02: true, isSubject03: false, subjectSelect2: null, subjectSelect3: null })
    }
    else {
      this.setState({ isSubject02: false, isSubject03: false, subjectSelect2: null, subjectSelect3: null })
    }
  }

  handleSubject02 = (event) => {
    if (event) {
      subject_code_3 = subject_code_2.slice();
      subject_code_2.map((e, index) => {
        if (e.value === event) {
          subject_code_3.splice(index, 1)
          return
        }
      })
      this.setState({ isSubject03: true, subjectSelect2: event, subjectSelect3: null })
    } else {
      this.setState({ sisSubject03: false, subjectSelect3: null })
    }
    console.log(this.state.subjectlist)

  }

  handleSubject03 = (event) => {
    if (event) {
      this.setState({ subjectSelect3: event })
    } else {
      this.setState({ subjectSelect3: null })
    }

  }

  clearSubject1 = () => {
    this.setState({ isSubject02: false })
    this.clearSubject2();
  }

  clearSubject2 = () => {
    this.setState({ subjectSelect2: null, isSubject03: false })
    this.clearSubject3();
    console.log(this.proFormRef)

  }
  clearSubject3 = () => {
    this.setState({ subjectSelect3: null })
  }


  render() {
    return (
      <div style={{ overflow: "scroll" }}>
        <Card>
          <ProForm
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            onReset={this.onReset}
          >

            <ProFormText
              name="title"
              label="Project Title"
              tooltip="Cannot be Empty"
              placeholder="Please Enter Title"
              width="lg"
              rules={[
                {
                  required: true,
                  message: 'Please input Project Title!',
                },
              ]}
              onChange={this.isExistingTitle}
            />
            <ProForm.Group>
              <ProFormSelect
                labelCol={{ offset: 2 }}
                options={subject_code}
                width="md"
                name="subject_1"
                label="Subjects "
                tooltip="At least 1 subject"
                onChange={this.handleSubject01}
                onClear={this.clearSubject1}
                rules={[
                  {
                    required: true,
                    message: 'Please select at least 1 subject!',
                  },
                ]}
              />
              <ProForm.Item name='subject_2' label="Optional 1">
                <Select
                  style={{ width: 150 }}
                  showSearch
                  allowClear
                  onClear={this.clearSubject2}
                  placeholder="Select a Subject"
                  options={subject_code_2}
                  onSelect={this.handleSubject02}
                  disabled={!this.state.isSubject02}
                  value={this.state.subjectSelect2}
                />
              </ProForm.Item>

              <ProForm.Item name='subject_3' label="Optional 2">
                <Select
                  style={{ width: 150 }}
                  showSearch
                  allowClear
                  onClear={this.clearSubject3}
                  placeholder="Select a Subject"
                  options={subject_code_3}
                  onChange={this.handleSubject03}
                  disabled={!this.state.isSubject03}
                  value={this.state.subjectSelect3}
                />
              </ProForm.Item>
            </ProForm.Group>
            <ProFormDateRangePicker name={['project_date', 'start_end_date']} label="Timeline" />
            <ProFormTextArea
              width="xl"
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input project description!',
                },
              ]}
            />
            <ProForm.Group>
              <ProFormText name="creator" disabled label="Creator" initialValue={cookie.load("username")} />
              <ProFormText name="creator_email" disabled label="E-mail" initialValue={cookie.load('email')} />
            </ProForm.Group>
   
              <ProForm.Item name='members' label='Members' >
                {this.state.membersLines.map((item, index) => {
                  return <Input key={"member"+index} name={'members' + index} id={'membersinput' + index} placeholder='Please input an e-mail' onChange={this.handleMembers} onBlur={this.handleIsMembers}></Input>
                })}
                <PlusCircleOutlined style={{ fontSize: 20, top: 5, position: "relative", float: "right" }} onClick={this.addMembersLine} />
              </ProForm.Item>
 
            <ProForm.Group>
              <ProForm.Item name="budget" label="Budget" tooltip="Budget must be greater than zero.">
                <InputNumber min={0} defaultValue={0} precision={2} />
              </ProForm.Item>
            </ProForm.Group>
            <ProForm.Item name='outcomes' label='Outcomes' >
              {this.state.outcomesLines.map((item, index) => {
                return <Input key={"outcomes"+index} name={'outcome' + index} id={'outcomeinput' + index} placeholder='Please input an outcome' onChange={this.handleOutcome}></Input>
              })}
              <PlusCircleOutlined style={{ fontSize: 20, top: 5, position: "relative", float: "right" }} onClick={this.addOutcomeLine} />
            </ProForm.Item>
            <ProFormRadio.Group
              label="Post in Marketplace"
              name="project_visible"
              initialValue="No"
              options={['No', 'Yes']}
            />
            <ProForm.Group>
              <ProForm.Item name="upload" label="Admin Documentations" >
                <Upload {...upload_button_props}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
              </ProForm.Item>
            </ProForm.Group>
          </ProForm>
        </Card>
      </div>
    );
  }
};