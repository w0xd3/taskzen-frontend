import InsightsControllerApi from '../../../js-client/api/InsightsControllerApi'

import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import 'antd/dist/reset.css'; // Make sure to import Ant Design styles

export default function Index(props) {

    const [date, setDate] = useState([])
    const [finish, setFinish] = useState([])
    const [create, setCreate] = useState([])
    const [total, setTotal] = useState([])
    const [loading, setLoading] = useState(true);
    const { duration } = props

    const apiInstance = new InsightsControllerApi()

    const fetchData = () => {
        apiInstance.getTaskTrend(duration, (error, _, response) => {
            if (error) console.log(error)
            else {
                const data = JSON.parse(response.text)
                console.log('@getTaskTrend:', data)
                setDate(data.date)
                setFinish(data.finish)
                setCreate(data.create)
                setTotal(data.total)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const c1 = '任务创建数'
    const c2 = '任务完成数'
    const c3 = '任务总数'

    const option = {
        title: {
            text: '任务趋势分析',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                return `${params[0].name}<br/>${c1}: ${params[0].data}<br/>${c2}: ${params[1].data}<br/>${c3}: ${params[2].data}`;
            }
        },
        legend: {
            data: [c1, c2, c3],
            orient: 'vertical', // 垂直排列
            left: 'left', // 放到左边
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%', // 保持底部空间
            top: '20%', // 增加顶部空间以避免与图例重叠
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
        xAxis: {
            type: 'category',
            data: date,
            axisPointer: {
                type: 'shadow'
            },
        },
        yAxis: {
            type: 'value',
            max: Math.round(Math.max(...total) * 1.2),
            axisPointer: {
                type: 'shadow'
            },
        },
        series: [
            {
                name: c1,
                data: create,
                type: 'bar'
            },
            {
                name: c2,
                data: finish,
                type: 'bar'
            },
            {
                name: c3,
                data: total,
                type: 'line',
                smooth: true
            }
        ],
    };




    return (
        <div style={{ padding: 20 }}>
            <ReactECharts
                option={option}
                style={{ height: 400, width: '100%', marginTop: '1%' }}
                showLoading={loading}
            />
        </div>
    );
}
