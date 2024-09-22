import TaskDistributionPieChart from '../../components/table/TaskDistributionPieChart'
import TaskCompletion from '../../components/table/TaskCompletion'
import TaskTimeSpent from '../../components/table/TaskTimeSpent'
import TaskTrend from '../../components/table/TaskTrend'
import ReportControllerApi from '../../js-client/api/ReportControllerApi';

import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Card, Button, Typography, Row, Col, Modal } from 'antd';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const { Text, Title } = Typography;

export default function Index() {

  const [duration, setDuration] = useState({})

  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [download, setDownload] = useState(true)
  const [showReport, setShowReport] = useState(false)

  const [suggestion, setSuggestion] = useState()
  const today = moment().format('YYYY-MM-DD')
  const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD')
  const ApiInstance = new ReportControllerApi()
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const { totalNum, doneNum, doneRate, totalTaskTime, maxTaskTime, averageTaskTime, unDoneNum, tagMap, pMap } = data

  const readable = (json) => {
    console.log(Object.entries(json).map(([key, value]) => `${key}标签的数量为 ${value}`).join('，'))
    return Object.entries(json).map(([key, value]) => `${key}标签的数量为 ${value}`).join('，');
  }

  const unPassText = '这段时间你还没有创建任务哦，快去添加一些吧，完成后再来查看任务进展报告！'
  const reportText =
    `你创建了${totalNum}个任务，完成了${doneNum}个任务，任务的完成率是${doneRate}，
    总任务时长是${totalTaskTime}小时。你完成的任务中，${readable(showReport ? pMap : '')}；${readable(showReport ? tagMap : '')}。你平均每个任务安排花费${averageTaskTime}小时，最长的任务花费${maxTaskTime}小时。还有${unDoneNum}个未完成任务。`;


  function fetchData() {

    setLoading(true)
    setDownload(true)

    ApiInstance.check(duration, (error, _, response) => {
      if (response.statusCode === 302) {
        navigate('/login');
      }
      if (error) {
        console.log(error)
      } else { // 成功才调用获取统计数据接口
        setShowModal(response.body)
        if (showModal) return
      }
    })
    
    ApiInstance.getStatistics(duration, (error, _, response) => {
      if (error) {
        console.log(error)
      } else {
        setData(JSON.parse(response.text))
      }
      
      setShowReport(true)
    })
    
    ApiInstance.aISuggestion(reportText, (error, _, response) => {
      if (error) {
        console.log(error)
      }else{
        console.log(response.text)
        setSuggestion(response.text)
        
        setLoading(false)
        setDownload(false)
      }
    })

  }

  const generatePDF = () => {

    const doc = new jsPDF('p', 'mm', 'a4');
    const content = document.getElementById('pdf-content'); // 获取整个需要导出的区域

    // 使用 html2canvas 将页面内容转换为 canvas
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // PDF 的宽度
      const pageHeight = 295; // PDF 的高度
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // 添加第一页图像到 PDF
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // 如果内容高度超过一页，则添加新页
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // 保存生成的 PDF 文件
      doc.save('report.pdf');
    });
  };


  const getDuration = (info) => {
    const startTime = info[0].format('YYYY-MM-DD')
    const endTime = info[1].format('YYYY-MM-DD')
    setDuration({ startTime, endTime })
  }

  function handleModal() {
    setShowModal(false)
  }

  return (
    <div>
      <div style={{ width: '80%', margin: 'auto' }}>
        <RangePicker
          style={{
            margin: '0.5%'
          }}
          onChange={getDuration}
          placeholder={[sevenDaysAgo, today]}
          format="YYYY-MM-DD"
        />
        <Button onClick={fetchData} style={{ marginBottom: '16px' }}>
          生成报告
        </Button>
        <Button
          disabled={download}
          onClick={generatePDF}
          style={{ marginBottom: '16px', marginLeft: '0.5%' }}
          icon={<DownloadOutlined />}>
          PDF
        </Button>
      </div>

      <Modal
        title="温馨提示"
        open={showModal}
        onOk={handleModal}
        onCancel={handleModal}
      >
        <p>{unPassText}</p>
      </Modal>
      {showReport &&
        <Card id='pdf-content' style={{ width: '80%', margin: 'auto', padding: '3%' }} loading={loading}>
          <Title level={2} style={{ textAlign: 'center' }}>任务进展报告</Title>
          <Title level={4} style={{ textAlign: 'right' }}>{sevenDaysAgo}——{today}</Title>
          <Row gutter={16} style={{ padding: '20px' }}>
            <Col span={12}>
              <Card
                title="总结"
                style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
              >
                <Text style={{ fontSize: '16px', lineHeight: '1.5' }}>
                  {'\u00A0\u00A0\u00A0\u00A0'}{reportText}
                </Text>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                title="建议"
                style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
              >
                <Text style={{ fontSize: '16px', lineHeight: '1.5' }}>
                  {'\u00A0\u00A0\u00A0\u00A0'}{suggestion}
                </Text>
              </Card>
            </Col>
          </Row>
          <TaskDistributionPieChart duration={duration} />
          <TaskCompletion duration={duration} />
          <TaskTimeSpent duration={duration} />
          <TaskTrend duration={duration} />

        </Card>
      }
    </div>
  );
};
