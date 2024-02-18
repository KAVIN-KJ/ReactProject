import './Styles/ReactRadio.css'
function ReactRadio(props){
    var color = ""
    if(props.text==="Male"){
        color = "blue"
    }
    else{
        color = "rgb(255, 0, 179)"
    }
    var localStyle = {
        accentColor: color,
    }
    return(
        
        <div>
            <input type='radio'name={props.name} className='react-radio' style={localStyle}/>
            <label htmlFor="">{props.text}</label>
        </div>
    )
}
export default ReactRadio