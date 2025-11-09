import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
 // declared todo list to store and keep track in local storage
 const [todos, setTodos] = useState(() => {
  return JSON.parse(localStorage.getItem("todos")) || []
 })

 // defind function
 const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
 }

 const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
 }

 const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
 }

 const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
 }

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])


 return(
  <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <TodoForm/>
    {todos.map((todo) => (
      <div key={todo.id}>
        <TodoItem todo ={todo}/>
      </div>
    ))}
  </TodoProvider>
 )
}

export default App
