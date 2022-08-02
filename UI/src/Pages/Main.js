import React , {useState} from 'react';
import { ReactDOM } from 'react';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import _defaultProps from '../Component/Navigation/_defaultProps';
import SubNavPage from '../Component/Sub-Navigation/SubNavPage';
import ProjectList from '../Component/ProjectList/ProjectList';
import Award from '../Component/OtherSystem/Award';
import Grantor from '../Component/OtherSystem/Grantor';
import Markeplace from '../Component/OtherSystem/Marketplace';
import Newproject from '../Component/NewProject/Newproject';
import Login from '../Component/Login/Login'
import history from '../history';

export default () => {
  const [pathname, setPathname] = useState("/");

    //listener of the change of path
    history.listen(() => {
      setPathname(history.location.pathname)
    })
    
      const props_nav= {
        ..._defaultProps,
        location: {
          pathname,
        },
        navTheme: 'dark',
        // headerContentRender:(_,dom)=>React.createElement("h1",null,"Project Managememt",dom),
        headerRender:false,
        fixedHeader:true,
        title:"Searten",
        logo:"https://images.squarespace-cdn.com/content/v1/5f3b323fc468515646444247/1600666377569-9OBSXHY7TC5NVBX006G6/White+transparent+Logo.png?format=1500w",
        contentWidth:"Fixed",  
        fixSiderbar: true,
        // collapsedButtonRender: false,
        menuItemRender: (item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || "/");
              console.log(item);
            }}
            to={item.path}
          >
            {dom}
          </a>
        ),
      };


    return (
        <div>
            <ProLayout 
               {...props_nav}
               location={{pathname}}
               headerRender={false}
               fixSiderbar={true}
               fixedHeader={true}
               title="Searten"
               logo="https://images.squarespace-cdn.com/content/v1/5f3b323fc468515646444247/1600666377569-9OBSXHY7TC5NVBX006G6/White+transparent+Logo.png?format=1500w"
               menuItemRender={(item, dom) => (
                <Link
                  onClick={() => {   
                    setPathname(item.path || '/');
                    console.log(item)
                  }}
                  to={item.path}
                >
                  {dom}
                </Link>
              )}
               menuHeaderRender={(logo, title) => (React.createElement("div", { id: "customize_menu_header", onClick: () => {
                window.open('http://localhost:3000/#/');
            } }, logo, title))}               
            >

              <Route path='/projectmanagement/project/:projectId' component={SubNavPage}></Route>
              <Route exact path='/projectmanagement/newproject' component={Newproject}></Route>
              <Route exact path='/projectmanagement' component={ProjectList}></Route>
              <Route exact path='/award' component={Award}></Route>
              <Route exact path='/grantor' component={Grantor}></Route>
              <Route exact path='/marketplace' component={Markeplace}></Route>
              <Route path='/user' component={Login}></Route>
                
            </ProLayout>
        </div>
    );
};
