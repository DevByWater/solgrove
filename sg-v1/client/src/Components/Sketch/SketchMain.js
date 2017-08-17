import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SketchWindow from './SketchWindow'
import Menu from '../Shared/Menu'


class SketchMain extends Component{
    render(){
        return(
             <div>
                <Menu />
                <Route path="/sim/:topic" component={SketchWindow} />
            </div>
        )
    }
}

export default SketchMain
