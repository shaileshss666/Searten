import React from "react";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import { columns, scales} from "./GanttData";
import axios from 'axios';

import '../../mock/task'


export default class GanttBasic extends React.Component {
  state={tasks:[],
          links:[]}

  componentDidMount(){
    axios.get('/projectmanagement/project/task').then((res)=>{
        this.setState({tasks:res.data.tasks,
                        links:res.data.links})
    }).catch((error)=>{
        console.log(error)
    })
  }

    render(){
      return (
        <DefaultTheme>
          <Gantt scales={scales} columns={columns} tasks={this.state.tasks} links={this.state.links} style={{height:"600px"}} />
        </DefaultTheme>
      );
    }
  }