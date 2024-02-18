import React from "react";
import './Styles/Calculator.css'
import { useState } from "react";
import Card from "./Card";

function Calculator(){
    const [expression,setExpression] = useState("0")
    const [number,setNumber] = useState("(0)")
    const [displayText,setDisplayText] = useState("0")

    const handleInput = (event) => {
        if(expression==="0") {
            setExpression(event.target.value)
            setDisplayText(event.target.value)
        }
        else{
            var userInput = expression+event.target.value
            setExpression(userInput)
            setDisplayText(userInput)
        }
    }

    const backSpace = () => {
        if(expression.length==1){
            setExpression('0')
            setDisplayText('0')
        }
        else{
            setExpression(expression.slice(0,-1))
            setDisplayText(displayText.slice(0,-1))
        }
    }

    const clear = () => {
        setExpression("0")
        setDisplayText("0")
    }

    const evaluate = (event) => {
        try{

            var result = eval(expression)
            result = result.toString()
            console.log(result)
            setExpression(result)
            setDisplayText(result)
            setNumber('('+result+')')
        }catch(error){
            clear()
        }
    }

    return(
        <div className="calculator">
            <div className="numpad">
                <textarea rows="20" id="expression" cols="50" className="expression" value={displayText}/> 
            <div className="numbers">
            <div className="row0">
                <button onClick={clear} className="button">C</button>
                <button onClick={backSpace} id="backspace" className="button">&#9003;</button>
                <button value={"%"} onClick={handleInput} className="button">%</button>
                <button value={"+"} onClick={handleInput} id="operator" className="button">+</button>
            </div>
                <div className="row1">
                <button value={"1"} onClick={handleInput} className="button1">1</button>
                <button value={"2"} onClick={handleInput} className="button2">2</button>
                <button value={"3"} onClick={handleInput} className="button3">3</button>
                <button value={"-"} onClick={handleInput} id="operator"  className="button">-</button>
                </div>
                <div className="row2">
                <button value={"4"} onClick={handleInput} className="button4">4</button>
                <button value={"5"} onClick={handleInput} className="button5">5</button>
                <button value={"6"} onClick={handleInput} className="button6">6</button>
                <button value={"*"} onClick={handleInput} id="operator" className="button">*</button>
                </div>
                <div className="row3">
                <button value={"7"} onClick={handleInput} className="button7">7</button>
                <button value={"8"} onClick={handleInput} className="button8">8</button>
                <button value={"9"} onClick={handleInput} className="button9">9</button>
                <button value={"/"} onClick={handleInput} id="operator" className="button">/</button>
                </div>
                <div className="row4">
                <button value={"0"} onClick={handleInput} className="button">0</button>
                <button value={"."} onClick={handleInput} className="button">.</button>
                <button value={number.slice(1,-1)} onClick={handleInput} className="button">Ans</button>

                <button  id="operator" onClick={evaluate} className="equals">=</button>

                </div>
            </div>
            </div>
        </div>
    );
}
export default Calculator