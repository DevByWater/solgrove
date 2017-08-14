import React, { Component } from 'react'


class Menu extends Component{
    render(){
        return(
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Solar System</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Metosis</a>
                    </li>
                </ul>
            </div>
           
        )
    }
}

export default Menu