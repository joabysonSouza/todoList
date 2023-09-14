import React, { useState } from 'react'
import {TextField,Button, Paper} from '@mui/material'


  export default function Form({TodoHandle}) {
    
    const [text , setText] = useState(null)
    const [id, setId] = useState (0)

    const todoCreate = (text) => {
      const todoObj = {text : text, id:id};
      setId(id + 1);
      TodoHandle(todoObj)
      document.getElementById("outlined-basic").value = null



    }

  return (
    <div>
        <Paper style={{ padding:'1em'}}>
    <div style={{ display:'flex', justifyContent:'center'}}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          fullWidth
          onChange={(e) => setText(e.target.value) }
        />
        <Button variant="text" onClick={()=>todoCreate(text)}>criar</Button>
    </div>
        </Paper>
    </div>
  )
}
