import InsightsControllerApi from '../../../js-client/api/InsightsControllerApi'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';

export default function Index(props) {

    const [plotData, setData] = useState({'bar':[], 'line':[]})
    const [xAxis,setXAxis] = useState()
    const [loading, setLoading] = useState(true);
    const { duration } = props
    const navigate = useNavigate();

    const apiInstance = new InsightsControllerApi()
    const c1 = '累计完成任务数'
    const c2 = '任务完成率'

    const fetchData = () => {
        apiInstance.getTaskCompletion(duration, (error, _, response) => {
            if (error) console.log(error)
            else {
                setData(JSON.parse(response.text))
            }
        })

        apiInstance.getCompletionXAxis(duration, (error, _, response) => {
            if (error) console.log(error)
            else {
                setXAxis(JSON.parse(response.text))
                setLoading(false);
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const option = {
        title: {
            text: '任务完成情况统计图',
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
                axisLabel: {
                    rotate: 20,
                },
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: c1,
                min: 0,
                max: Math.round(Math.max(...plotData.bar) * 1.3),
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: c2,
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: c1,
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value;
                    }
                },
                itemStyle: {
                    color: '#3BA272'
                },
                data: plotData.bar
            },
            {
                name: c2,
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' %';
                    }
                },
                itemStyle: {
                    color: '#FAC858'
                },
                data: plotData.line
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
