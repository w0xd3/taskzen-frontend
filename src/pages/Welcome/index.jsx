import React from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import './index.css'; // For custom styles

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Index(){
  return (
    <Layout className="layout">
      <Content className="site-layout-content">
        <div className="welcome-container">
          <Title level={1}>欢迎来到 Task Zen</Title>
          <Paragraph>
            欢迎使用 Task Zen，您的终极时间管理解决方案。我们的系统帮助您高效地管理任务，跟踪时间，并保持组织有序。拥抱生产力，发现我们直观而优雅的界面所带来的时间管理艺术。
          </Paragraph>
          <Space>
            <Button type="primary" href="/todo">
              开始使用
            </Button>
            <Button type="default" href="https:www.baidu.com">
              了解更多
            </Button>
          </Space>
        </div>
      </Content>
      <Footer className="footer">
        <div className="footer-content">
          <Typography.Text>© 2024 Task Zen. 版权所有。</Typography.Text>
        </div>
      </Footer>
    </Layout>
  );
};
