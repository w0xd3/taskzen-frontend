import * as React from 'react';
import TextField from '@mui/material/TextField';
import PubSub from 'pubsub-js'



export default function Header() {

    const handleKeyDown = (event) => {
        if (event.key !== 'Enter') return

        const text = event.target.value
        const textFiled = document.getElementById('outlined-full-width')
        textFiled.value = ''

        const data = {
            userId: 1,
            text: text
        }

        PubSub.publish('new_todo_data', data)
    }

    return (
        <>
            <TextField
                id="outlined-full-width"
                label="Todo"
                style={{ 
                    width: '70%',
                    marginLeft:"15%"
                 }}
                placeholder="随机输入一个待办事项~"
                helperText=""
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onKeyUp={handleKeyDown}
            />
        </>
    );
}