import React from "react";
import './Home.css'
function Home(){
    return(
        <div>
            <h1>Welcome to Home</h1>
            <h3>Featured Products</h3>
            <ul className="list">
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
            </ul>
            <h3>Latest News</h3>
            <ul className="list">
                <li>News 1 
                    <p className="newsContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam odio! Aliquam esse neque iusto error harum laboriosam cum doloribus, ipsa blanditiis nisi alias iste ut ullam eveniet deleniti. Distinctio.</p>
                </li>
                <li>News 2
                    <p className="newsContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam odio! Aliquam esse neque iusto error harum laboriosam cum doloribus, ipsa blanditiis nisi alias iste ut ullam eveniet deleniti. Distinctio.</p>
                </li>
                <li>News 3
                    <p className="newsContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quibusdam odio! Aliquam esse neque iusto error harum laboriosam cum doloribus, ipsa blanditiis nisi alias iste ut ullam eveniet deleniti. Distinctio.</p>
                </li>

            </ul>
        </div>
    );
}

export default Home