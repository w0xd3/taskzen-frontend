import React from 'react';
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

export default function Todos() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [isHovering, setIsHovering] = React.useState(false)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 让列表项居中
      }}
    >
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}
            className={classes.item}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >

            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>

            <ListItemText id={labelId} primary={`Todo ${value + 1}`} />

            {isHovering &&
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