import React, { useState, useEffect } from 'react'
import TaskDistributionPieChart from '../../components/table/TaskDistributionPieChart'
import TaskCompletion from '../../components/table/TaskCompletion'
import TaskTimeSpent from '../../components/table/TaskTimeSpent'
import TaskTrend from '../../components/table/TaskTrend'
import moment from 'moment';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;


export default function Insights() {

  const [duration, setDuration] = useState({})
  const today = moment().format('YYYY-MM-DD')
  const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD')

  const style = {
    border: '1px solid #ddd', // 添加边框
    borderRadius: '8px', // 可选：添加圆角
    padding: '10px',
  }

  const getDuration = (info) => {
    const startTime = info[0].format('YYYY-MM-DD')
    const endTime = info[1].format('YYYY-MM-DD')
    setDuration({startTime, endTime})
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <RangePicker
          style={{
            margin: '0.5%'
          }}
          onChange={getDuration}
          placeholder={[sevenDaysAgo, today]}
          format="YYYY-MM-DD"
        />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '10px', // 设置网格项之间的间距
      }}>
        <div style={style}>
          <TaskDistributionPieChart duration={duration} />
        </div>
        <div style={style}>
          <TaskCompletion duration={duration} />
        </div>
        <div style={style}>
          <TaskTimeSpent duration={duration} />
        </div>
        <div style={style}>
          <TaskTrend duration={duration} />
        </div>
      </div>
    </>
  )
}
