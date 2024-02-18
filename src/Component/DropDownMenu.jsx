import React from "react";
import './Styles/DropDownMenu.css'
function DropDownMenu(props){
    const list = props.items
    const buttons = list.map((item) =>  <button className="option">{item}</button>)
    return(
        <div className="container">
            <button className="dropdown">{props.name}</button>
            <div className="content">
                {buttons}
            </div>
        </div>
    )
}

export default DropDownMenu
