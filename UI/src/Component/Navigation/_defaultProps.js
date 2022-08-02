import React from 'react';
import { MoneyCollectOutlined , CrownOutlined, TabletOutlined, AreaChartOutlined ,UserOutlined } from '@ant-design/icons';
import Marketplace from '../OtherSystem/Marketplace';


export default {
    route: {
        routes: [
            {
                path: '/grantor',
                name: 'Grantor',
                icon: React.createElement(CrownOutlined, null),
                component: './Welcome',
            },
            {
                path: '/award',
                name: 'Award',
                icon: React.createElement(MoneyCollectOutlined, null),
                access: 'canAdmin',
                component: './Admin'           
            },
            {
                name: 'Project',
                icon: React.createElement(TabletOutlined, null),
                path: '/projectmanagement',
                component: './ListTableList',              
            },
            {
                path: '/marketplace',
                name: 'Marketplace',
                icon: React.createElement(AreaChartOutlined, null),
                component: {Marketplace},
            },
            {
                path: '/user',
                name: 'Account',
                icon: React.createElement(UserOutlined, null),
            },
        ],
    },
    location: {
        pathname: '/',
    },
};