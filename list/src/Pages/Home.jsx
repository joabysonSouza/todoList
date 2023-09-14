import React, { useState } from 'react'
import Form from '../Components/Form';
import TodoItem from '../Components/TodoItem';
import { Container, List } from '@mui/material';

function Home() {
    const[todos , setTodos] =useState([])

    const TodoHandle =(todo)=>{
        setTodos([...todos, todo])
        
    }

    const deleteTodo = (id) => {
      let filtered = todos.filter((todo)=>todo.id !== id)
      setTodos(filtered)

    }

    const editTodo =(id, editedText)=>{
      let todoArray = [...todos];

      for (let i in todoArray){
        if(todoArray[i].id == id){
          todoArray[i].text = editedText
        }
      }

    // todos.slice(id, 1,{Text: editedText, id:id})
    setTodos(todoArray)


      

    }
  return (
    <div>
      <Container maxWidth="xs" style={{marginTop:'1em'}}>
      <Form TodoHandle={TodoHandle}/>
      <List sx={{ marginTop:'1em'}}>
        {todos.map((todo)=>(
            <div key={todo.id} >
              <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
            </div>
        ))}
      
      </List>
      
    </Container>
    </div>
  )
}

export default Home
