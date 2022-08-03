import React from "react";
import {Layout} from 'antd';
import { NavLink, Outlet} from "react-router-dom";
import './Layout.css'
import TodoGenerator from "../features/todos/TodoGenerator";
import { HomeOutlined, QuestionCircleOutlined, CheckOutlined } from '@ant-design/icons';


const {Header, Footer, Sider, Content} = Layout;
export default function LayoutPage() {

    return (
        <div>
            <Layout>
                <Header className="MyHeader">
                    <div className="MenuList">
                        <NavLink className="Menu" activeClassName="active" to="/"><HomeOutlined />Home</NavLink>
                        <NavLink className="Menu" activeClassName="active" to="/help"><QuestionCircleOutlined />Help</NavLink>
                        <NavLink className="Menu" activeClassName="active" to="/done"><CheckOutlined />Done</NavLink>
                    </div>
                </Header>
                <Content className="MyContent">
                    <Outlet />
                </Content>
                <Footer className="MyFooter">
                    <TodoGenerator />
                </Footer>
            </Layout>
        </div>
    )
}