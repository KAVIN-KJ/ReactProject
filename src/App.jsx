import React from 'react';
import { BrowserRouter as Router,Route,Link, Routes, Outlet } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact'
import CardList from './Component/CardList'
import Card from './Component/Card';
import './Component/Styles/ButtonReact.css'
import './Component/Styles/App.css'
import './Variables.js'
import ColorPicker from './Component/ColorPicker.jsx';
import ToDoList from './Component/ToDoList.jsx';
import Calculator from './Component/Calculator.jsx';
function App(){
  const list = [
    { name: 'Letter - A', desc: 'Apple 🍎' },
    { name: 'Letter - B', desc: 'Ball ⚽' },
    { name: 'Letter - C', desc: 'Cat 😸' },
    { name: 'Letter - D', desc: 'Dog 🐕' },
    { name: 'Letter - E', desc: 'Ear 👂🏻' },
    { name: 'Letter - F', desc: 'Finger 🖐🏻' },
    { name: 'Letter - G', desc: 'GOAT 🐐' },
    { name: 'Letter - H', desc: 'Horse 🐴' },
    { name: 'Letter - I', desc: 'Ice Cream 🍦' },
    { name: 'Letter - J', desc: 'Joystick 🕹️' },
    { name: 'Letter - K', desc: 'King 👑' },
    { name: 'Letter - L', desc: 'Luck 🍀' },
    { name: 'Letter - M', desc: 'Map 🗺' },
    { name: 'Letter - N', desc: 'Notebook 📒' },
    { name: 'Letter - O', desc: 'Orange 🍊' },
    { name: 'Letter - P', desc: 'Penguin 🐧' },
    { name: 'Letter - Q', desc: 'Queen 👸' },
    { name: 'Letter - R', desc: 'Rocket 🚀' },
    { name: 'Letter - S', desc: 'Sun ☀️' },
    { name: 'Letter - T', desc: 'Tree 🌳' },
    { name: 'Letter - U', desc: 'Umbrella ☔' },
    { name: 'Letter - V', desc: 'Violin 🎻' },
    { name: 'Letter - W', desc: 'Watermelon 🍉' },
    { name: 'Letter - X', desc: 'Xylophone 🎶' },
    { name: 'Letter - Y', desc: 'Yoga 🧘‍♂️' },
    { name: 'Letter - Z', desc: 'Zebra 🦓' }
  ];
      return(
      <div className='appJS'>
      <Router >
          <nav className='navBar'>
            <ul className='unList'>
              <li>
                <Link to='/Pages/Home' className='link'><button className='ButtonReact'>Home</button></Link>
              </li>
              <li>
                <Link to='/Component/CardList'className='link'><button className='ButtonReact'>List</button></Link>
              </li>
              <li>
                <Link to='/Component/Card'className='link' ><button className='ButtonReact'>About</button></Link>
              </li>
              <li>
                <Link to='/Component/ColorPicker'className='link'><button className='ButtonReact'>ColorPicker</button></Link>
              </li>
              <li>
                <Link to='/Component/ToDoList' className='link'><button className='ButtonReact'>ToDoList</button></Link>
              </li>
              <li>
                <Link to='/Component/Calculator.jsx' className='link'><button className='ButtonReact'>Calculator</button></Link>
              </li>
            </ul>
          </nav>
          <Routes>
              <Route exact path='/Pages/Contact' element={<Contact/>}/>
              <Route exact path='/Component/Card' element={<Card name = "Kavin Raja K J" desc = "Android Developer"/>}/>
              <Route exact path='/Pages/Home' element={<Home/>}/>
              <Route exact path='/Pages/About' element={<About/>}/>
              <Route exact path='/Component/ColorPicker' element={<ColorPicker/>}/>
              <Route exact path='/Component/CardList' element={<CardList list={list}/>} />
              <Route exact path ='/Component/ToDoList' element = {
                                  <div  className = 'todolistApp'>
                                    <ToDoList/>
                                  </div>
                                  
                                  }/>
              <Route exact path='/Component/Calculator.jsx' element = { <div className='calc'>
      <Calculator/>
      </div>}/>
          </Routes>
      <Outlet/>
      </Router>
      </div>
    );
}
export default App


