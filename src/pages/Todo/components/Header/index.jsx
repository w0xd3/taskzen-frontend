import * as React from 'react';
import TextField from '@mui/material/TextField';
import PubSub from 'pubsub-js'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';


export default function Header() {

    const handleKeyDown = (event) => {
        if (event.key !== 'Enter') return

        const text = event.target.value
        const textFiled = document.getElementById('outlined-full-width')
        textFiled.value = ''

        const data = {
            userId:1,
            text: text
        }

        PubSub.publish('new_todo_data', data)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // 水平居中
                    alignItems: 'center',
                }}
            >
                {/* TODO：头像路径要改 */}
                <Avatar src="/1.jpg" />
                <div style={{ 'color': 'white' }}>aa</div>
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
                    onKeyUp={handleKeyDown}
                />
            </Box>

        </>
    );
}