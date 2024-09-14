import React from 'react'
import TaskDistributionPieChart from '../../components/table/TaskDistributionPieChart'

export default function Insights() {

  const style = {
    border: '1px solid #ddd', // 添加边框
    borderRadius: '8px', // 可选：添加圆角
    padding: '10px'
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: '10px', // 设置网格项之间的间距
      height: '100vh'
    }}>
      <div style={style}>
        <TaskDistributionPieChart />
      </div>
      <div style={style}>

      </div>
      <div style={style}>

      </div>
      <div style={style}>

      </div>
    </div>
  )
}
