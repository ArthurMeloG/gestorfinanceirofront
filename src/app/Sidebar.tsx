import React, {useState} from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Flex, Layout} from "antd";
import {Button, Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {key: '1', icon: <PieChartOutlined/>, label: 'Option 1'},
    {key: '2', icon: <DesktopOutlined/>, label: 'Option 2'},
    {key: '3', icon: <ContainerOutlined/>, label: 'Option 3'},
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined/>,
        children: [
            {key: '5', label: 'Option 5'},
            {key: '6', label: 'Option 6'},
            {key: '7', label: 'Option 7'},
            {key: '8', label: 'Option 8'},
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined/>,
        children: [
            {key: '9', label: 'Option 9'},
            {key: '10', label: 'Option 10'},
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {key: '11', label: 'Option 11'},
                    {key: '12', label: 'Option 12'},
                ],
            },
        ],
    },
];


interface SidebarProps {
    children?: React.ReactNode
}

const Sidebar: React.FC = ({children}: SidebarProps) => {
    const {Sider, Header, Content} = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const onClick: MenuProps['onClick'] = (e) => {
        toggleCollapsed();
        console.log('click ', e);
    };

    return (
        <Layout style={{backgroundColor: "#f6ffed"}}>
            <Header style={{display: 'flex', alignItems: 'center'}}></Header>
            <Content>
                <Flex>
                    <Layout style={{display: "contents"}}>
                        <Sider collapsed={collapsed}>
                            <Menu
                                onClick={onClick}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme=""
                                items={items}
                                style={{height: "100%"}}
                            />
                        </Sider>
                    </Layout>
                    <Content>{children}</Content>
                </Flex>
            </Content>
        </Layout>
    );
};

export default Sidebar;