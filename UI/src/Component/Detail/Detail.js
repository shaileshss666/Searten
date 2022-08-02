import React from "react";
import { Descriptions, Badge, List} from 'antd';
import { Button } from 'antd';
import axios from 'axios';
import history from '../../history';
import {subject_code} from '../../sources/dataset/data'
import { Link } from "react-router-dom";

//------------------------------------------------------testing data-----------------------------------
import '../../mock/project_detail'

//------------------------------------------------------testing data End-----------------------------------




function transfer_subject_lable(code){
  for(var i=0;i<subject_code.length;i++){
      if(code===subject_code[i].value){
        return subject_code[i].label
      }
  }
}


export default class Detail extends React.Component {

  state={
    detail:{},
    memebrs:[],
    milestone:[],
    start_end_date:[],
    subject:{}
  }

  componentDidMount(){
    axios.get('/projectmanagement/project/detail').then((res)=>{
       this.setState({detail:res.data.detail,
                      memebrs:res.data.members,
                      milestone:res.data.milestone,
                      start_end_date:res.data.detail.start_end_date,
                      subject:res.data.detail.subject
                    })
      // console.log("code: 是"+JSON.stringify(this.state.start_end_date));
    }).catch((error)=>{
        console.log(error);
    })
  }
  
  render(){
    return (
      
      <div>

        <div style={{height:"97%" ,position:"absolute",  overflow:"scroll"}}>
               
                <Descriptions title='Project Details'
                              bordered={true}
                              column={ 8 }
                              size='default'
                              layout="vertical"
                >
                    <Descriptions.Item label="Project Title" span={8}>{this.state.detail.title}</Descriptions.Item>
                    <Descriptions.Item label="Status" span={8}>
                      <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Subject" span={8}>
                      {transfer_subject_lable(this.state.subject.s1)}
                      {this.state.subject.s2===''?"":", "+transfer_subject_lable(this.state.subject.s2)}
                      {this.state.subject.s3===''?"":", "+transfer_subject_lable(this.state.subject.s3)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Creator" span={8}>{this.state.detail.creator}</Descriptions.Item>
                    <Descriptions.Item label="Start time" span={4}>{this.state.start_end_date[0]}</Descriptions.Item>
                    <Descriptions.Item label="Due Time" span={4}>{this.state.start_end_date[1]}</Descriptions.Item>
                    <Descriptions.Item label="Estimated Budget" span={4}>{this.state.detail.estimated_budget}</Descriptions.Item>
                    <Descriptions.Item label="Actual Budget" span={4}>{this.state.detail.actual_budget}</Descriptions.Item>
                    <Descriptions.Item label="Outcomes" span={8}>
                        <List
                          size="small"
                          bordered={false}
                          dataSource={this.state.detail.outcomes}
                          renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="Descrition" span={8}>
                      {this.state.detail.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="Milestone" span={8}>
                        <List
                              size="small"
                              bordered={false}
                              dataSource={this.state.milestone}
                              renderItem={item => <List.Item>{item.start_date} &nbsp;&nbsp;&nbsp; {item.text}</List.Item>}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="Team Members" span={8}>
                        <List
                              size="small"
                              bordered={false}
                              dataSource={this.state.memebrs}
                              renderItem={item => <List.Item>{item.name}</List.Item>}
                        />
                    </Descriptions.Item>
                </Descriptions>
      
      </div>
      <div style={{position:"fixed",bottom:"2%",right:'2%'}}>
          <Button type="primary" disabled style={{width:'120px',  top:10, float:"right"}}>Delete</Button>
          <Link to="edit"><Button type="primary" style={{width:'120px',  top:10, float:"right",right:"10px"}}>Edit</Button></Link>
      </div>
    </div>

    
  
    )

  }
  
}




