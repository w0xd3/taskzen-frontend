import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { Button, Drawer, Space } from 'antd';
const { Option } = Select;

// Todo option 全是写死的 后面看看要不要要改

export default function Task(props) {

    const { handleOpen, onSubmit } = props
    const [form] = Form.useForm();

    const handleClose = () => {
        handleOpen(false)
    }

    const onFinish = (value) => {
        onSubmit(value)
        form.resetFields();
    }

    return (
        <Drawer
            title="新增任务"
            width={720}
            open={true}
            onClose={handleClose}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }}
            extra={
                <Space>
                    <Button onClick={handleClose}>关闭</Button>
                    {/* Todo 提交逻辑 */}
                    <Button onClick={() => { form.submit() }} type="primary">提交</Button>
                </Space>
            }
        >

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="text"
                            label="任务标题"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="不要忘记输入标题噢" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="tag"
                            label="任务标签"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <Select placeholder="请选择标签">
                                <Option value="学习">学习</Option>
                                <Option value="工作">工作</Option>
                                <Option value="休闲">休闲</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="p"
                            label="优先级"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <Select placeholder="选择任务优先级">
                                <Option value="P0">P0</Option>
                                <Option value="P1">P1</Option>
                                <Option value="P2">P2</Option>
                                <Option value="P3">P3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="dateTime"
                            label="开始&结束时间"
                            rules={[
                                {
                                    required: true,
                                    message: '请选择选择开始&结束时间~',
                                },
                            ]}
                        >
                            <DatePicker.RangePicker showTime
                                style={{
                                    width: '100%',
                                }}
                                getPopupContainer={(trigger) => trigger.parentElement}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="description"
                            label="任务描述"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} placeholder="别忘了给你的任务添加一个简短的描述哦！" />
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </Drawer>
    )
}
