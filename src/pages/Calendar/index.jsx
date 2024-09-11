import { createEventId } from './event-utils'
import Task from '../../components/Task'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TaskControllerApi from '../../js-client/api/TaskControllerApi';

import React, { useState, useRef, useEffect } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import zhCnLocale from '@fullcalendar/core/locales/zh-cn' // 引入中文语言包
import { Tag } from 'antd';

export default function Calendar() {

  const apiInstance = new TaskControllerApi()

  const [INITIAL_EVENTS, SetINITIAL_EVENTS] = useState([])
  const [currentEvents, setCurrentEvents] = useState([])
  const [open, setOpen] = useState(false);

  const clickTimeout = useRef(null); 
  const clickCount = useRef(0); 

  const fetchTasks = () => {
    let id = 1;
    apiInstance.getTasksById(id, (error, _, response) => {
      if (error) {
        console.error(error);
      } else {
        SetINITIAL_EVENTS(response.body);
      }
    });
  };

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleOpen = (taskOpen) => {
    setOpen(taskOpen)
  }

  // TODO 改变状态半透明
  const componentDidMount = (info) => {
    console.log(info.event.extendedProps.done)
    if(info.event.extendedProps.done){
      info.el.style.backgroundColor = 'gray';
    }
  }

  const onSubmit = (task) => {
    apiInstance.addTask(task, (error, _, __) => {
      if(error){
        console.log(error)
      }else{
        alert("任务保存成功")
        fetchTasks()
      }
    })
  }

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

  //Todo 
  function handleEventClick(clickInfo) {

    const taskId = clickInfo.event.id

    clickCount.current += 1;

    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }
    clickTimeout.current = setTimeout(() => {
      if (clickCount.current === 1) { // 单击修改状态
        // apiInstance.modifyTask()
        
      } else if (clickCount.current === 2) { // 双击修改或删除
        
        
      }

      // 重置点击次数
      clickCount.current = 0;
    }, 250); 
  }

  // 更新当前事件
  function handleEvents(events) {
    setCurrentEvents(events)
  }

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div className='demo-app'>

      <Sidebar
        currentEvents={currentEvents}
      />

      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
          headerToolbar={{
            left: 'prev,next today myCustomButton',   
            center: 'title',           
            right: 'timeGridDay,timeGridWeek,dayGridMonth' 
          }}
          locales={[zhCnLocale]} 
          locale="zh-cn"         
          themeSystem='bootstrap5'
          initialView='timeGridWeek'
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          events={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
          eventDidMount={componentDidMount}
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

        {open && <Task handleOpen={handleOpen} onSubmit={onSubmit} />}
      </div>
    </div>
  )
}

// 自定义事件内容渲染函数
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
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
          <li>点击 “+” 号图标，打开创建新任务的侧边栏</li>
          <li>单击任务可切换完成状态</li>
          <li>双击任务以编辑或删除</li>
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

const colorMap = ['#FF4500', '#FF8C00', '#FFD700', '#B0E57C'];


// 侧边栏中的事件项组件
function SidebarEvent({ event }) {
  // console.log(event.extendedProps)
  const {p, tag} = event.extendedProps
  return (
    <li key={event.id}>
      {p !== null && <Tag color={colorMap[p]}>P{p}</Tag>}
      {tag && <Tag color="blue">{tag}</Tag>}
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b> {/* 事件开始时间 */}
      <i>{event.title}</i> {/* 事件标题 */}
    </li>
  )
}