import { useState } from 'react';
import './App.css';

function App() {
  const [todolist,setTodoList] = useState([]);
  const [inputValue,setInputValue] = useState('');
  const [editTodoId, setEditTodoId] = useState();
  const [editTodoValue, setEditTodoValue] = useState();
  const [updateValue,setUpdateValue] = useState('');

  const addTodo = () => {
    const newTodo = {
      text:inputValue,
      id:Date.now()
    };
    setTodoList([...todolist,newTodo]);
    setInputValue('');
  }

  const editTodo = (id) => {
    const todos = todolist;
    const updatedTodos = todos.filter((todo)=>todo.id === id);
    setEditTodoId(id);
    setEditTodoValue(updatedTodos[0].text);
  }

  const updateTodo = () => {
    console.log(editTodoId,updateValue);
    // const newTodo = [...todolist];
    // newTodo[editTodoId] = updateValue;
    // setTodoList(newTodo);
  }

  return (
    <div className="App">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" className='addinput' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Title..."/>
        <span onClick={addTodo} className="addBtn" >Add</span>
      </div>
      <ul id="myUL">
        {todolist.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
                <div>
                  <input type="text" value={editTodoValue} onChange={(e) => setUpdateValue(e.target.value)} placeholder="Title..."/>
                  <span onClick={updateTodo} className="updateList" >Update</span>
                </div>
              ):(
                <div>
                  <span>{todo.text}</span> <div className='action'><span className="edit" onClick={()=>editTodo(todo.id)}>Edit</span><span className="close">×</span></div>
                </div>
              )
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
