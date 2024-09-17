import InsightsControllerApi from '../../../js-client/api/InsightsControllerApi'

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

export default function Index(props) {

    const [need, setNeed] = useState([])
    const [plan, setPlan] = useState([])
    const [xAxis, setXAxis] = useState()
    const [loading, setLoading] = useState(true);
    const { duration } = props

    const apiInstance = new InsightsControllerApi()
    const c1 = '需完成任务时间'
    const c2 = '创建任务时间'

    const fetchData = () => {
        apiInstance.getTaskTimeSpent(duration, (error, _, response) => {
            if (error) console.log(error)
            else {
                console.log('@getTaskTimeSpent', JSON.parse(response.text))
                const data = JSON.parse(response.text)
                setNeed(data.need)
                setPlan(data.plan)
                setXAxis(data.x)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const option = {
        title: {
            text: '每日任务时间图',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: [c1, c2],
            orient: 'vertical', // 垂直排列
            left: 'left', // 放到左边
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%', // 保持底部空间
            top: '20%', // 增加顶部空间以避免与图例重叠
        },
        xAxis: [
            {
                type: 'category',
                data: xAxis,
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    rotate: 20
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: c1, // 使用第一个属性名
                min: 0,
                max: Math.round(Math.max(...plan, ...need) * 1.3), // 同时考虑两个数据集的最大值
                axisLabel: {
                    formatter: '{value}h' // 格式化为简单数值
                }
            }
        ],
        series: [
            {
                name: c1,
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + 'h';
                    }
                },
                itemStyle: {
                    color: '#91CC75'
                },
                data: need
            },
            {
                name: c2,
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + 'h';
                    }
                },
                itemStyle: {
                    color: '#73C0DE'
                },
                data: plan
            }
        ]
    };


    return (
        <div>
            <ReactECharts
                option={option || {}}
                showLoading={loading}
                style={{ height: 400, width: '100%', marginTop: '5%' }}
            />
        </div>
    )
}
