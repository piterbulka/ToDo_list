import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

function AddToDo({todo, setTodo}){
    
    const [value, setValue] = useState ('')
    
    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuid.v4(),
                title: value,
                status: true
            }]
        )
    }
    
    return(
        <div>
            <input placeholder='Введите задачу' value= {value} onChange={ (e)=> setValue(e.target.value)}/>
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddToDo