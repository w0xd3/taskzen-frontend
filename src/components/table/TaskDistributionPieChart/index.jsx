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
        orient: 'vertical',   
        left: 'left',         
        data: leftLegend 
      },
      {
        orient: 'vertical',   
        right: 'right',      
        data: rightLegend  
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
          show: true,
          backgroundColor: '#FFFFFF',   
          borderRadius: 8,              
          padding: [6, 8],              
          borderColor: '#FAEBD7',       
          borderWidth: 0.5,               
          // color: '#0277BD',             
          formatter: '{b}: {c} ({d}%)',
        },
        data: tagList
      }
    ]
  };

  return (
    <div>
      <ReactECharts
        option={option}
        style={{ height: 400, width: '100%', marginTop: '5%' }}
      />
    </div>
  );
}