import React from 'react';
import { MoneyCollectOutlined , CrownOutlined, TabletOutlined, AreaChartOutlined ,UserOutlined } from '@ant-design/icons';
import Detail from "../Detail/Detail";

export default {
    route: {
        path: '/projectmanagement/project/',
        routes: [
            {
                path: '/home',
                name: 'Home',
                icon: React.createElement(CrownOutlined, null),
                component: '@/Component/GanttPage',
            },
            {
                path: '/folder',
                name: 'Folder',
                icon: React.createElement(MoneyCollectOutlined, null),
                access: 'canAdmin',
                component: './Admin'           
            },
            {
                name: 'Plan',
                icon: React.createElement(TabletOutlined, null),
                path: '/plan',
                component: '@/Component/Gantt',              
            },
            {
                path: '/task',
                name: 'Task',
                icon: React.createElement(AreaChartOutlined, null),
                component: '@/Component/GanttPage',
            },
            {
                path: '/member',
                name: 'Member',
                icon: React.createElement(UserOutlined, null),
            },
            {
                path: '/budget', redirect:'/budget/overview',
                name: 'Budget',
                icon: React.createElement(UserOutlined, null),                
                routes: [
                    {
                    path: '/budget/overview',
                    name: 'Overview',
                    icon: <CrownOutlined />,
                    component: './',
                    },
                    {
                    path: '/budget/allocation',
                    name: 'Allocation',
                    icon: <CrownOutlined />,
                    component: './',
                    },
                ],
            },
            {
                path: '/grant',
                name: 'Grant',
                icon: React.createElement(UserOutlined, null),
            },
            {
                path: '/detail',
                name: 'Detail',
                icon: React.createElement(UserOutlined, null),
                component: Detail
            }
        ],
    },
    location: {
        pathname: '/',
    },
};
