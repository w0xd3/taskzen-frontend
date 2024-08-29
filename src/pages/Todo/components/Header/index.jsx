import * as React from 'react';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import PubSub from 'pubsub-js'

export default function Header() {

    const handleKeyDown = (event) => {
        if(event.key !== 'Enter') return

        const text = event.target.value
        const id = nanoid()
        const textFiled = document.getElementById('outlined-full-width')
        textFiled.value = ''
        
        const data = {
            TodoId:id,
            Text:text,
            createTime: Date.now(),
            done:false
        }

        PubSub.publish('new_todo_data', data)
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <TextField
                    id="outlined-full-width"
                    label="Todo"
                    style={{ width: 600 }}
                    placeholder="随机输入一个待办事项~"
                    helperText=""
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onKeyDown={handleKeyDown}
                />
            </div>
            
        </>
    );
}