import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({todo, deleteTodo, editTodo}) {

  const[openDialog , setopenDialog] = React.useState(false)

  const dialogHandler =()=>{
    setopenDialog(!openDialog)
  };


  

        return (
          <>
       <EditTodoDialog editTodo={editTodo} open={openDialog} dialogHandler={dialogHandler} todo={todo}/>  
        <Paper>
          <ListItem 
          style={{ marginTop: '1em'}}
            secondaryAction={
                <IconButton aria-label="delete" size="small" onClick={()=>deleteTodo(todo.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} onClick={()=>setopenDialog(true)} />
            </ListItemButton>
          </ListItem>
          </Paper>  
         </>
        );
    
    
  
}