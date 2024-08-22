import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Header() {

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
                />
            </div>
            
        </>
    );
}