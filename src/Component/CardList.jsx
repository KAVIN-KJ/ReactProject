
import './Styles/List.css'

import Card from './Card';

function CardList(props){
    const arr = props.list
    const mappedArr = arr.map(i => <Card name = {i.name} desc = {i.desc}/>)
    return(<div className='CardList'>{mappedArr}</div>);
}
export default CardList