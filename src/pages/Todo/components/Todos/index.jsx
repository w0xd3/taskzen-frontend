import TodosControllerApi from '../../../../js-client/api/TodosControllerApi'
import React, { useEffect, useState, useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PubSub from 'pubsub-js'
import { useNavigate } from 'react-router-dom';


export default function Todos() {

  const apiInstance = new TodosControllerApi();
  const [chosenId, setchosenId] = useState(-1)
  const [data, setData] = useState()
  const [showDeleteDone, setShowDeleteDone] = useState()
  const navigate = useNavigate()


  // 初次加载时获取待办事项数据
  const fetchTodos = () => {
    apiInstance.getTodosById((error, _, response) => {
      if (response.statusCode === 302) {
        navigate('/login');
      }
      if (error) {
        console.log(error)
      } else {
        setData(response.body);
      }
    });
  };

  useEffect(() => {
    // 调用 fetchTodos 获取初始数据
    fetchTodos();

    // 订阅新增任务事件
    const token = PubSub.subscribe('new_todo_data', (_, todo) => {
      if (todo.text.trim() === '') return;

      // 加到数据库
      apiInstance.addTodo(todo, (error) => {
        if (error) {
          console.error(error);
        } else {
          // 新增成功后重新获取最新的任务列表并更新
          fetchTodos(); // 再次获取数据
        }
      });
    });

    // 卸载时取消订阅
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);


  useEffect(() => {
    setShowDeleteDone(data ? data.length > 0 : false)
  }, [data])

  // 处理点击效果
  const handleToggle = (todoId) => () => {
    apiInstance.changeStatus(todoId, (error) => {
      if (error) {
        console.error(error);
      } else {
        // 新增成功后重新获取最新的任务列表并更新
        fetchTodos(); // 再次获取数据
      }
    })
  };

  // 处理悬浮效果
  const handleMouseOver = (id) => () => {
    setchosenId(id)
  }
  const handleMouseOut = () => {
    setchosenId(-1)
  }

  // 删除功能
  const deleteTodo = (id) => () => {
    apiInstance.removeTodo([id], (error) => {
      if (error) {
        console.error(error);
      } else {
        fetchTodos(); // 再次获取数据
      }
    })
  }

  // 删除已完成任务功能
  const deleteDone = () => {
    const ids = data.filter(e => e.done).map(e => e.todoId);
    apiInstance.removeTodo(ids, (error) => {
      if (error) {
        console.error(error);
      } else {
        fetchTodos(); // 再次获取数据
      }
    })
  }

  // 修改文本内容
  const modifyTodo = (text) => {

    // apiInstance.changeStatus({'todoId':todoId, 'text':text}, (error) => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     // 新增成功后重新获取最新的任务列表并更新
    //     fetchTodos(); // 再次获取数据
    //   }
    // })

  }

  return (
    <>
      <List
        sx={{
          flexDirection: 'column',
          marginLeft: '15%',
          width: '70%',
        }}
      >
        {data && data.map((value) => {
          const labelId = `checkbox-list-label-${value.todoId}`;
          return (
            <ListItem key={value.todoId} role={undefined} dense button
              onMouseOver={handleMouseOver(value.todoId)}
              onMouseOut={handleMouseOut}
              onClick={modifyTodo()}
            >

              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={handleToggle(value.todoId)}
                />
              </ListItemIcon>

              <ListItemText id={labelId} primary={value.text} />

              {(chosenId === value.todoId) &&
                (<Button
                  variant="contained"
                  size='small'
                  onClick={deleteTodo(value.todoId)}
                >
                  Delete
                </Button>)
              }

              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      {showDeleteDone && <Button
        variant="contained"
        onClick={deleteDone}
        style={{
          marginLeft: '40%',
          width: '20%'
        }}
      >
        删除已完成
      </Button>}

    </>
  );
}