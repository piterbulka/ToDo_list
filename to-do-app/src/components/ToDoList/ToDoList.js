import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Form, ButtonGroup } from 'react-bootstrap';
import s from './ToDoList.module.css'


function ToDoList( {todo, setTodo}){
    
    const [edit, setEdit] = useState(null)
    const [value, setValue]= useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    function todoFilter(status){
        if(status === 'all'){
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

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

    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id){
        let newTodo = [...todo].map(item => {
            if(item.id == id){
                item.title = value 
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return(
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={()=>todoFilter('all')}>Все</Button>
                <Button variant="secondary" onClick={()=>todoFilter(true)}>Текущие</Button>
                <Button variant="secondary" onClick={()=>todoFilter(false)}>Завершенные</Button>
            </ButtonGroup>
            {
            filtered.map( item =>(
                <div key={item.id} className={s.listItems}>
                    {
                        edit == item.id ?
                            <div>
                                <input value={value} onChange={(e)=> setValue(e.target.value)}/>
                                
                            </div> :
                            <div className={!item.status ? s.close : ''}>
                                {item.title}
                            </div>
                    }
                    {
                        edit == item.id ?
                        <div>
                            <Button  variant="outline-danger" onClick={ ()=>saveTodo(item.id) }>Сохранить</Button>
                        </div> :
                        <div>
                            <Button variant="outline-danger" onClick={ ()=>deleteTodo(item.id) } >Удалить</Button>
                            <Button variant="outline-danger" onClick={ ()=>editTodo(item.id, item.title) } className= {s.btn} >Редактировать</Button>
                            <Button variant="outline-danger" onClick={ ()=>statusTodo(item.id) } className= {s.btn}>
                            {
                                item.status ? 'Завершить' : 'Начать'
                            }   </Button>
                        </div>
                    }
                
                </div>
            ))
            }
        </div>
    )
}

export default ToDoList