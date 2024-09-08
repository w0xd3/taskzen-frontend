import { INITIAL_EVENTS, createEventId } from './event-utils'
import Task from '../../components/Task'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import zhCnLocale from '@fullcalendar/core/locales/zh-cn' // 引入中文语言包
import { Button, Drawer, Space } from 'antd';


export default function Calendar() {

  const [currentEvents, setCurrentEvents] = useState([])
  const [open, setOpen] = useState(false);

  // 处理日期选择的函数
  function handleDateSelect(selectInfo) {
    // 提示用户输入事件标题
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    // 清除日期选择
    calendarApi.unselect()

    // 如果用户输入了标题，则添加新事件
    if (title) {
      calendarApi.addEvent({
        id: createEventId(), // 生成事件 ID
        title,              // 事件标题
        start: selectInfo.startStr, // 事件开始时间
        end: selectInfo.endStr,     // 事件结束时间
        allDay: selectInfo.allDay   // 是否是全天事件
      })
    }
  }

  // 确认删除事件
  function handleEventClick(clickInfo) {
    if (console.log(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  // 更新当前事件
  function handleEvents(events) {
    setCurrentEvents(events)
  }

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='demo-app'>

      <Sidebar
        currentEvents={currentEvents}
      />

      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // 使用的插件
          headerToolbar={{
            left: 'prev,next today myCustomButton',   // 头部工具栏左侧的按钮
            center: 'title',           // 头部工具栏中间的标题
            right: 'timeGridDay,timeGridWeek,dayGridMonth' // 头部工具栏右侧的视图切换按钮
          }}
          locales={[zhCnLocale]} // 添加 locales
          locale="zh-cn"         // 设置默认语言为中文
          themeSystem='bootstrap5'
          initialView='timeGridDay'
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          initialEvents={INITIAL_EVENTS} // TODO 可换 初始数据 数据库可以照着这个设计
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
          customButtons={{
            myCustomButton: {
              text: '新增任务',
              click: showDrawer,  // 按钮点击时执行的函数
            },
          }}
          buttonIcons={{
            myCustomButton: 'bi bi-bookmark-plus',
          }}

        /* 可以在这里处理事件添加、修改和删除的远程数据库更新:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
        <Drawer
          title="新增任务"
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button onClick={onClose}>关闭</Button>
              <Button onClick={onClose} type="primary">提交</Button>
            </Space>
          }
        >
          <Task/>
        </Drawer>
      </div>
    </div>
  )
}

// 自定义事件内容渲染函数
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b> {/* 事件时间 */}
      <i>{eventInfo.event.title}</i> {/* 事件标题 */}
    </>
  )
}

// 侧边栏组件
function Sidebar({ currentEvents }) {
  return (
    <div className='demo-app-sidebar'>
      <div className='demo-app-sidebar-section'>
        <h2>指引</h2>
        <ul>
          <li>选择日期，即会弹出提示创建新事件</li>
          <li>拖动、放置及调整事件的大小</li>
          <li>点击事件以删除它</li>
        </ul>
      </div>
      <div className='demo-app-sidebar-section'>
        <h2>所有事件 ({currentEvents.length})</h2> {/* 当前事件总数 */}
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} /> // 渲染每个事件
          ))}
        </ul>
      </div>
    </div>
  )
}

// 侧边栏中的事件项组件
function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b> {/* 事件开始时间 */}
      <i>{event.title}</i> {/* 事件标题 */}
    </li>
  )
}