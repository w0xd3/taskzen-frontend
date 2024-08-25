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

const useStyles = makeStyles(() => ({
  item: {
    minWidth: 500,
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

  const classes = useStyles();
  const [chosenId, setchosenId] = React.useState(-1)
  const [data, setData] = React.useState([])

  useEffect(() => {
    setData(orderTodos(TodoData.Todos))
  },[])

  //获取按创建时间排序的Todos
  const orderTodos = (Todos) => {
    return Todos.sort((o1, o2) => {
      return o1.createTime <= o2.createTime ? -1 : 1;
    })
  }

  // 处理点击效果
  const handleToggle = (TodoId) => () => {
    let newData = data.map((el) => {
      if(el.TodoId === TodoId) return {...el, done:!el.done}
      return el
    })
    setData(newData)
  };

  // 处理悬浮效果
  const handleMouseOver = (id) => () => {
    setchosenId(id)
  }
  const handleMouseOut = () => () => {
    setchosenId(-1)
  }

  // 新增功能

  // 删除功能

  // 删除已完成任务功能


  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 让列表项居中
      }}
    >
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value.TodoId}`;
        return (
          <ListItem key={value.TodoId} role={undefined} dense button
            className={classes.item}
            onMouseOver={handleMouseOver(value.TodoId)}
            onMouseOut={handleMouseOut()}
          >

            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.done}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onClick={handleToggle(value.TodoId)}
              />
            </ListItemIcon>

            <ListItemText id={labelId} primary={value.text} />

            {(chosenId === value.TodoId) &&
              (<Button
                variant="contained"
                color="secondary"
                size='small'
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
  );
}