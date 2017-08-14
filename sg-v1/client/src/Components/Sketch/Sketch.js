import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'

import solar_system_sketch from './SolarSystem/index'
class Sketch extends Component{
    render(){
        return(
            <P5Wrapper sketch={solar_system_sketch} />
        )
    }
}

export default Sketch