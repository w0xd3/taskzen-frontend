import InsightsControllerApi from '../../../js-client/api/InsightsControllerApi'

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';


export default function TaskDistributionPieChart(props) {

  const {duration} = props
  const [leftLegend, setLeftLegend] = useState('') // p
  const [rightLegend, setRightLegend] = useState('') // tag
  const [pList, setPList] = useState([])
  const [tagList, setTagList] = useState([])
  const navigate = useNavigate();

  const apiInstance = new InsightsControllerApi()

  const fetchData = () => {
    apiInstance.getPList(duration, (error, _, response) => {
      if(response.statusCode === 302){
        navigate('/login');
      }
      if(error){
        console.log(error)
      }else{
        // console.log('setLeftLegend:',response.body)
        setLeftLegend(response.body)
      }
    })

    apiInstance.getTagList(duration, (error, _, response) => {
      if(error){
        console.log(error)
      }else{
        // console.log('setRightLegend:',response.body)
        setRightLegend(response.body)
      }
    })

    apiInstance.getTaskDistribution(duration, (error, _, response) => {
      if(error){
        console.log(error)
      }else{
        // console.log(response.text)
        const data = JSON.parse(response.text)
        setPList(data.p)
        setTagList(data.tag)
      }
    })

  }

  useEffect(() => {
    fetchData()
  }, [duration])

  const option = {
    title: {
      text: '任务数量分布统计图',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: [
      {
        // 左边的图例，垂直排列
        orient: 'vertical',   // 垂直排列
        left: 'left',         // 定位到左边
        data: leftLegend  // 放置的系列名称
      },
      {
        // 右边的图例，垂直排列
        orient: 'vertical',   // 垂直排列
        right: 'right',       // 定位到右边
        data: rightLegend  // 放置的系列名称
      }
    ],
    series: [
      {
        name: '优先级',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14,
          color: 'white'
        },
        labelLine: {
          show: false
        },
        data: pList
      },
      {
        name: '标签',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
          length: 30
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: tagList
      }
    ]
  };

  return (
    <div>
      <ReactECharts
        option={option}
        style={{ height: 400, width: '100%' }}
      />
    </div>
  );
}