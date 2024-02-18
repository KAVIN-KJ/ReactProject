import React, { useState } from "react";
import './Styles/ToDoList.css'

function ToDoList(){
    const [todo,setTodo] = useState([])
    function handleAddition(event){
            const newtask = document.getElementById("userInput").value;
            if(newtask==="") return
            document.getElementById("userInput").value = "";
            setTodo([...todo,newtask])

    }
    function handleRemove(index){
        setTodo(todo.filter((_,i) => i!==index))
    }
    return(
        <div className="todo">
            <h1>TO DO List</h1>
            <div className="todolist">
                {todo.map((todo,index) => <div className="task" ><div className="taskName"  key={index}>{todo} </div> <div onClick={() => handleRemove(index)} className="tick">✅</div> </div>)} 
                
            </div>
            <input on={handleAddition} placeholder="Enter a Task" id="userInput" type="text" />
            <button className="ButtonReact" onClick={handleAddition}>Add Task !</button>
        </div>
    );
}
export default ToDoList