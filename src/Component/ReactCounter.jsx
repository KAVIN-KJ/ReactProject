import React,{useState} from 'react'
import './Styles/ButtonReact.css'
import './Styles/ReactCounter.css'
import './Styles/InputReact.css'
import './Card'
function ReactCounter(){
    const [yn,setYn] = useState(true)
    const [count,setcount] = useState(0)
    const [name,setName] = useState("Null")
    const increment = () => {
        setcount(count+1)
    }
    const decrement = () => {
        setcount(count-1)
    }
    const reset = () => {
        setcount(0);
    }
    const choice = () => {
        setYn(!yn)
    }
    const updateName = (event) =>{
         setName(event.target.value)
    }

        return(
            <div className='MyComponent'>
                <p>{count}</p>
                <p onClick={choice}>{yn ? "True" : "False" }</p>
                <button onClick={increment} className='ButtonReact'>Increment</button>
                <button onClick={reset} className='ButtonReact'>Reset</button>
                <button onClick={decrement} className='ButtonReact'>Decrement</button>
                <input className='input-field' type='text' onChange={updateName}></input>
                <p className='name'>Name : {name}</p>

            </div>
        );
}

export default ReactCounter