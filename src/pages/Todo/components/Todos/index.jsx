import TodosControllerApi from '../../../../jsclient/api/TodosControllerApi'

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PubSub from 'pubsub-js'
import { Box } from '@mui/system';

const useStyles = makeStyles(() => ({
  item: {
    width: 600,
    height: 50
  }
}));

// mock data
const TodoData = {
  Todos: [
    { TodoId: '001', text: '吃饭', createTime: 10, done: false },
    { TodoId: '002', text: '睡觉', createTime: 20, done: false },
    { TodoId: '003', text: '学习', createTime: 80, done: false },
    { TodoId: '004', text: '跳舞', createTime: 30, done: false },
  ]
}

export default function Todos() {

  const apiInstance = new TodosControllerApi();
  const classes = useStyles();
  const [chosenId, setchosenId] = React.useState(-1)
  const [data, setData] = React.useState()

  useEffect(() => {

    let id = 1; // Number | 
    apiInstance.getTodosById(id, (error, _, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(response.body);
        setData(response.body)
      }
    });

    PubSub.subscribe('new_todo_data', (_, todo) => {
      console.log(todo)
      if (todo.text.trim() === '') return

      // add
      apiInstance.addTodo(todo)


      // const n_data = [todo, ...data];
      // setData(n_data);
      // console.log(data)
    });

  }, [])

  // 处理点击效果
  const handleToggle = (todoId) => () => {
    let newData = data.map((el) => {
      if (el.todoId === todoId) return { ...el, done: !el.done }
      return el
    })
    setData(newData)
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

    apiInstance.removeTodo(id)

    // setData(data.filter((e) => {
    //   if (e.TodoId !== id) return e
    // })
    // )
  }

  // 删除已完成任务功能
  const deleteDone = () => {
    setData(data.filter((e) => {
      if (!e.done) return e
    })
    )
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // 水平居中
        }}
      >
        <List
          sx={{
            flexDirection: 'column',
            // alignItems: 'center', // 让列表项居中
            // justifyContent: 'center', // 水平居中
            width: '550px',
          }}
        >
          {data && data.map((value) => {
            const labelId = `checkbox-list-label-${value.todoId}`;
            return (
              <ListItem key={value.todoId} role={undefined} dense button
                className={classes.item}
                onMouseOver={handleMouseOver(value.todoId)}
                onMouseOut={handleMouseOut}
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
                    color="secondary"
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
      </Box>

      {/* TODO */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // 水平居中
        }}
      >
        <Button variant="contained" color="secondary" onClick={deleteDone}>删除已完成</Button>
      </Box>
    </>
  );
}