import React, { useState } from "react";
import ProLayout from "@ant-design/pro-layout";

import _SubNavProps from "./_SubNavProps";
import { Link } from "react-router-dom";
import _defaultProps from "../Navigation/_defaultProps";
import { Route, Redirect } from "react-router";
import DGauge from "../Home/DGauge";

import Gantt from "../Gantt/Gantt";
import Folder from "../Folder/Folder";

import Task from "../Task/Task";
import Detail from "../Detail/Detail";
import CreateTask from "../Task/CreateTask";
import TaskDetail from "../Task/TaskDetail";
import Home from "../Home/Home";
import Grant from "../Grant/Grant";
import AddGrant from "../Grant/AddGrant";
import Member from "../Member/Member";
import AddMember from "../Member/AddMember";
import Allocation from "../Budget/Allocation/Allocation";
import Overview from "../Budget/Overview/Overview";
import EditDetail from "../EditDetail/EditDetail";
import AddOverview from "../Budget/Overview/AddOverview";

class SubNavPage extends React.Component {

  state={pathname: "/projectmanagement/project/"+this.props.match.params.projectId};


  props_subnav = {
    ..._SubNavProps,
    location: this.state.pathname,
    navTheme: "light",
    headerRender: false,
    title: "Project Page",
    logo: null,
    contentWidth: "Fixed",
    fixSiderbar: true,
  }
  
  render(){
  
  return (
    <ProLayout
      {...this.props_subnav}
      menuItemRender={(item, dom) => (
        
        <Link
          onClick={() => {
            this.setState({pathname:("/projectmanagement/project/"+this.props.match.params.projectId+item.path)});
            console.log(this.state.pathname.substring(("/projectmanagement/project/"+this.props.match.params.projectId).length))
          }}
          to={"/projectmanagement/project/"+this.props.match.params.projectId+item.path}
        >
          {dom}
        </Link>
      )}
      menuProps={{selectedKeys:(this.state.pathname.substring(("/projectmanagement/project/"+this.props.match.params.projectId).length))}}
      
    >

      <Route exact path={"/projectmanagement/project/"+this.props.match.params.projectId}><Redirect to={"/projectmanagement/project/"+this.props.match.params.projectId+"/home"} /></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/home"} component={Home}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/folder"} component={Folder}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/plan"} component={Gantt}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/task"} component={Task}></Route>      
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/createtask"} component={CreateTask}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/taskdetail"} component={TaskDetail}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/member"} component={Member}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/addmember"} component={AddMember}></Route>
      <Route exact path={"/projectmanagement/project/"+this.props.match.params.projectId+"/budget"}><Redirect to={"/projectmanagement/project/"+this.props.match.params.projectId+"/budget/overview"} /></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/budget/overview"} component={Overview}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/budget/addoverview"} component={AddOverview}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/addoverview"} component={AddOverview}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/budget/allocation"} component={Allocation}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/grant"} component={Grant}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/detail"} component={Detail}></Route>
      <Route path={"/projectmanagement/project/"+this.props.match.params.projectId+"/edit"}  component={EditDetail}></Route>


    </ProLayout>
  );
  }
};

export default SubNavPage;