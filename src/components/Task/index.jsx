import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
const { Option } = Select;

// Todo option 全是写死的 后面看看要不要要改

export default function Task() {
    return (
        <Form layout="vertical" hideRequiredMark>
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
                        <Input placeholder="请输入标题" />
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
                                required: true,
                                message: 'Please choose the type',
                            },
                        ]}
                    >
                        <Select placeholder="请选择标签">
                            <Option value="study">学习</Option>
                            <Option value="work">工作</Option>
                            <Option value="relax">休闲</Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="p"
                        label="优先级"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <Select placeholder="选择任务优先级">
                            <Option value="0">P0</Option>
                            <Option value="1">P1</Option>
                            <Option value="2">P2</Option>
                            <Option value="3">P3</Option>
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
                                message: '请选择开始、结束时间',
                            },
                        ]}
                    >
                        <DatePicker.RangePicker
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
                                required: true,
                                message: 'please enter url description',
                            },
                        ]}
                    >
                        <Input.TextArea rows={4} placeholder="别忘了给你的任务添加一个简短的描述哦！" />
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    )
}
