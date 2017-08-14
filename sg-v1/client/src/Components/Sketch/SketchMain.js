import React, { Component } from 'react'

import Menu from '../Shared/Menu'
import Sketch from './Sketch'

class SketchMain extends Component{
    render(){
        return(
             <div>
                <Menu />
                <h1>SketchMain Component</h1>
                <Sketch/>
            </div>
        )
    }
}

export default SketchMain
