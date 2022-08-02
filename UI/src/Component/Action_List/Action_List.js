import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar} from 'antd';
import { Link } from 'react-router-dom';



export default class Action_List extends React.Component {

 render(){
   return(
    <List
    itemLayout="horizontal"
    dataSource={this.props.actionlist}
    pagination={{
      showSizeChanger:false,
      pageSize: this.props.current_pageSize
    }}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={item.title}
          description={<Link to="/projectmanagement/project">{item.description}</Link>}
        />
      </List.Item>
    )}
  />
   )
 }

}

