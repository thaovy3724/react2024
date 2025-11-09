import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({todo}){
    const {toggleComplete, updateTodo, deleteTodo} = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
    return(
        <div>
            <input 
            type="checkbox"
            checked = {todo.completed}
            onChange={toggleCompleted} />

            <input 
            type="text"
            readOnly = {!isTodoEditable}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
             />

            <button
                onClick={() => {
                    if(todo.completed) return
                    if(isTodoEditable) updateTodo(todo.id, {...todo, todo: todoMsg})
                    setIsTodoEditable((prev) => !prev)
                }}
            >{isTodoEditable ? "save" : "edit"}</button>
            <button
                onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem