import UserControllerApi from '../../js-client/api/UserControllerApi';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Form, Input, Button, Typography, Row, Col } from 'antd';
// import 'antd/dist/reset.css'; // 引入 Ant Design 的样式

const { Title } = Typography;

export default function Index(){

  const apiClient = new UserControllerApi()
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values:', values);
    // 这里可以处理登录逻辑
    apiClient.userLogin(values, (error, _, response) => {
      if(error) console.log(error)
      else{
        console.log("login success")
        navigate('/')
      }
    })
  };

  return (
    <div style={{ background: '#f0f2f5', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Row justify="center" style={{ width: '100%' }}>
        <Col span={8}>
          <div style={{ background: '#ffffff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Task Zen 登录</Title>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <Typography.Paragraph>
                <strong>Task Zen 时间管理系统</strong>
              </Typography.Paragraph>
              <Typography.Paragraph>
                管理您的时间，提升生产力，合理安排任务，享受高效生活。
              </Typography.Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
