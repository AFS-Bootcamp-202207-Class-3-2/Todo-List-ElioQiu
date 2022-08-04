import React from "react";
import {Layout } from 'antd';
import { NavLink, Outlet} from "react-router-dom";
import './Layout.css'
import TodoGenerator from "../features/todos/TodoGenerator";
import { HomeOutlined, QuestionCircleOutlined, CheckOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";


const {Header, Footer, Content} = Layout;
export default function LayoutPage() {
    const isLoading = useSelector(state => state.loading.isLoading);
    console.log('@isLoading:', isLoading)

    return (
        <div>
            <Layout>
                <Header className="MyHeader">
                    <div className="MenuList">
                        <NavLink className="Menu" activeclassname="active" to="/"><HomeOutlined />Home</NavLink>
                        <NavLink className="Menu" activeclassname="active" to="/help"><QuestionCircleOutlined />Help</NavLink>
                        <NavLink className="Menu" activeclassname="active" to="/done"><CheckOutlined />Done</NavLink>
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