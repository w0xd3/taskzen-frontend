import Calendar from '../../pages/Calendar';
import Todo from '../../pages/Todo';
import Insights from '../../pages/Insights';
import Report from '../../pages/Report';
import Welcome from '../../pages/Welcome';
import './index.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';

const { Content, Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={'15%'}
          className="site-layout-background"
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          collapsedWidth={0} // 完全折叠
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >

            {/* Todo 这里是头像 暂时写死 */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px auto' }}>
              <Avatar
                src="/1.jpg"
                style={{
                  margin: '10px 5% 10px 25%'
                }}
              />
              {/* Todo 这里是用户名 暂时写死 */}
              <span>豆瓣酱</span>
            </div>

            {/* 这里可以封装 */}
            <Menu.Item key="1">
              <Link to="/todo">待办 - Todo</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/calendar">日历任务 - Calender</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/insight">时间分析 - Time Insights</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/report">报告 - Report</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px', minHeight: 280 }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/insight" element={<Insights />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Navbar;
