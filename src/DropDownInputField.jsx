import React from "react";
import './Components/Styles/DropDownInputField.css'

function DropDownInputField(props){
    return(
        <div className="DropDownInputField">
        <div className="Container">
            <div className="Contents">
                <input id="qwerty" type="text" placeholder={props.placeholder}/>
                <button onClick={props.onClick} className="button">{props.title}</button>
            </div>
        </div>
        </div>
    );
}
DropDownInputField.defaultPropTypes = {
    onClick:addEventListener
}
export default DropDownInputField