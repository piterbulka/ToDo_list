import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Row, Form } from 'react-bootstrap';
import s from './AddToDo.module.css'



function AddToDo({todo, setTodo}){
    
    const [value, setValue] = useState ('')
    
    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
    
    return(
        <Row>
            <Col className= {s.AddToDoForm}>
                <Form.Control className= {s.input} placeholder='Введите задачу' value= {value} onChange={ (e)=> setValue(e.target.value)}/>
                <Button variant="outline-danger" onClick={saveTodo} className= {s.btn}>Сохранить</Button>
            </Col>
        </Row>
    )
}

export default AddToDo