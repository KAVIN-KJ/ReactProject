import React, { useState } from "react";
import './Styles/ColorPicker.css'
function ColorPicker(){
    const [color, setColor] = useState("#ffffff")
    function changeColor(event) {
        setColor(event.target.value)
    }


    return(
        <div className="ColorPicker">
            <h3 style={{margin:"0px", textAlign:"center"}}>{color}</h3>
            <div style={{backgroundColor : color}} className="background">
            </div>
            <h2>Choose A Color</h2>
            <input type="color" onChange={changeColor}/>
        </div>
    );
    
}
 
export default ColorPicker