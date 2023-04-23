import React from 'react'

function ToDoList( {todo, setTodo}){
    
    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }
    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status =! item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    console.log(todo)
    return(
        <div>{
            todo.map( item =>(
                <div key={item.id}>
                    <div>{item.title}</div>
                    <button onClick={ ()=>deleteTodo(item.id) } >Удалить</button>
                    <button onClick={ ()=>statusTodo(item.id) } >Закрыть/Открыть</button>
                </div>
            ))
            }
        </div>
    )
}

export default ToDoList