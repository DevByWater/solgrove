import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Menu extends Component{

    render(){
        console.log("Menu Props: ", this.props)
        
        return(
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/sim/vectors">Vectors</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/sim/solar-system">Solar Sytem</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sim/snake-game">Snake</Link>
                    </li>
                </ul>
            </div>   
        )
    }
}

export default Menu