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
import { Card, InputNumber, Select, Input } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import moment from "moment";

import axios from 'axios'
import { subject_code } from '../../sources/dataset/data'

import '../../mock/project_edit'
import '../../mock/project_detail'




//-------------------------------------------------------------Subject code=>lable-------------------------------------------------------------

var subject_code_2;
var subject_code_3;
//-------------------------------------------------------------Subject Selections End-------------------------------------------------------------



//-------------------------------------------------------------Compare Array Function-------------------------------------------------------------
function compareArray(arr1,arr2) {
  let a = arr1.slice(); 
  let b = arr2.slice(); 
  if(trim(a.sort().toString())===trim(b.sort().toString())){
    return true
  }else{
    return false
  }
}
//-------------------------------------------------------------Compare Array End-------------------------------------------------------------





//-------------------------------------------------------------is a string empty or space? Function-------------------------------------------------------------
function isStringEmpty(str){
    if (str.match(/^[ ]*$/)) {return true}
    else {return false}
}
//-------------------------------------------------------------is a sting End-------------------------------------------------------------

//-------------------------------------------------------------remove space from the string Function-------------------------------------------------------------
function trim(str){
  if(str===null) return "";
  while(str.charAt(0)===" "){
    str = str.substring(1,str.length)
  }
  while(str.charAt(str.length-1)===" "){
    str = str.substring(0,str.length-1)
  }
  return str
}

//-------------------------------------------------------------remove space from the string End-------------------------------------------------------------





export default class EditDetail extends React.Component {

  state = {
    detail: [],
    start_end_date: [],
    start_date: "",
    end_date: '',
    subject: {},
    isSubject02: false,
    isSubject03: false,
    subjectSelect1: null,
    subjectSelect2: null,
    subjectSelect3: null,
    outcomesLines: [],
    outcomesList: [],
  }

  onFinish = (values) => {  
    
    if(values.title!=undefined){
      values.title = trim(values.title);
      if(values.title===this.state.detail.title||isStringEmpty(values.title)){
      delete values.title
    }
  }
    if(values.description!=undefined){ 
      values.description=trim(values.description)
    if(values.description===this.state.detail.description||isStringEmpty(values.description)){
      delete values.description
    }
  }
    var sendValues = values
    if(!compareArray(this.state.outcomesList,this.state.detail.outcomes)){
      var sentOutcomes = this.state.outcomesList
      sentOutcomes.forEach((element,index) => {
        sentOutcomes[index]= trim(element)
        if(isStringEmpty(element)){sentOutcomes.splice(index,1)}
      })
      var originalOutcome = this.state.detail.outcomes;
      originalOutcome.forEach((element,index)=>{
        if(element===""){originalOutcome.splice(index,1)}
      })
      if(!compareArray(sentOutcomes,originalOutcome)){ 
      sendValues = {...values, "outcomes": sentOutcomes}
      }
      console.log('Success:', sendValues);
    }

    

    alert("Success: Edit Project Detail")
    axios.post('/projectmanagement/project/edit', sendValues).then(res => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
    this.props.history.goBack();
  };
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  onReset = () => {
    this.iniSubject()
    this.iniOutcomes()
  }

//function to initialize subject selections
  iniSubject = () => {
    if (this.state.subject.s1) {
      this.setState({ isSubject02: true, subjectSelect1: this.state.subject.s1 })
      subject_code_2 = subject_code.slice();
      subject_code.map((e, index) => {
        if (e.value === this.state.subject.s1) {
          subject_code_2.splice(index, 1)
          return
        }
      })
    }
    
    if (this.state.subject.s2) {
      this.setState({ isSubject03: true, subjectSelect2: this.state.subject.s2 });
      subject_code_3 = subject_code_2.slice();
      subject_code_2.map((e, index) => {
        if (e.value === this.state.subject.s2) {
          subject_code_3.splice(index, 1)
          return
        }
      })
    }else{
      this.setState({ isSubject03: false, subjectSelect2: null });
    }

    if (this.state.subject.s3) {
      this.setState({ subjectSelect3: this.state.subject.s3 })
    }else{
      this.setState({subjectSelect3: null });
    }
  }
//function to initialize outcomes
  iniOutcomes = ()=> {
    var originalOutcome = this.state.detail.outcomes;
    originalOutcome.forEach((element,index)=>{
      if(element===""){originalOutcome.splice(index,1)}
    })
    this.setState({
      outcomesList:originalOutcome,
      outcomesLines:originalOutcome
    })
  }


  componentDidMount() {
    axios.get('/projectmanagement/project/detail').then((res) => {
      this.setState({
        detail: res.data.detail,
        start_end_date: res.data.detail.start_end_date,
        start_date: res.data.detail.start_end_date[0],
        end_date: res.data.detail.start_end_date[1],
        subject: res.data.detail.subject,
      })
      //initialize subject selections
      this.iniSubject()
      //initialize outcomes
      this.iniOutcomes()
      //console.log("edit页面的date: " + JSON.stringify(this.state.detail))

    }).catch((err) => {
      console.log(err);
    })
  }


  handleSubject01 = (event) => {
    if (event) {
      subject_code_2 = subject_code.slice();
      subject_code.map((e, index) => {
        if (e.value === event) {
          subject_code_2.splice(index, 1)
          return
        }
      })
      this.setState({ subjectSelect1: event, isSubject02: true, isSubject03: false, subjectSelect2: null, subjectSelect3: null })
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

  }

  handleSubject03 = (event) => {
    if (event) {
      this.setState({ subjectSelect3: event })
    } else {
      this.setState({ subjectSelect3: null })
    }

  }

  clearSubject2 = () => {
    this.setState({ subjectSelect2: null, isSubject03: false })
    this.clearSubject3();
  }

  clearSubject3 = () => {
    this.setState({ subjectSelect3: null })
  }

  addOutcomeLine = () => {
    let newOutcomes = this.state.outcomesLines;
    newOutcomes.push("")
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





  render() {
    return (
      <div style={{ height: "100%", width: '100%', position: 'absolute', overflow: "scroll" }}>
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
              placeholder={this.state.detail.title}
              value={this.state.detail.title}
              width="lg"

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
                value={this.state.subjectSelect1}
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

            <ProFormDateRangePicker
              name={['project_date', 'start_end_date']}
              label="Timeline"
              value={[
                moment(this.state.start_end_date[0], 'YYYY-MM-DD'),
                moment(this.state.start_end_date[1], "YYYY-MM-DD")]}
            />
            <ProFormTextArea
              width="xl"
              label="Description"
              name="description"
              value={this.state.detail.description}

            />




            <ProForm.Item name='outcomes' label='Outcomes' >
              {this.state.outcomesLines.map((item, index) => {
                return <Input 
                            key={"outcomes" + index} 
                            name={'outcome' + index} 
                            id={'outcomeinput' + index} 
                            placeholder='Please input an outcome' 
                            onChange={this.handleOutcome}
                            defaultValue={this.state.detail.outcomes[index]?this.state.detail.outcomes[index]:null}
                      ></Input>
              })}
              <PlusCircleOutlined style={{ fontSize: 20, top: 5, position: "relative", float: "right" }} onClick={this.addOutcomeLine} />
            </ProForm.Item>






            <ProForm.Group>
              <ProForm.Item name="budget" label="Budget" tooltip="Budget must be greater than zero.">
                <InputNumber min={0} defaultValue={0} precision={2} value={this.state.detail.estimated_budget} />
              </ProForm.Item>
            </ProForm.Group>
            <ProFormRadio.Group
              label="Marketplace"
              name="project_visable"
              value={this.state.detail.visable ? 'Visable' : "Disvisable"}
              options={['Disvisable', 'Visable']}
            />
          </ProForm>
        </Card>
      </div>
    );
  }
};