import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'

import '../../assets/styles/landing.css'

class Landing extends Component{
    render(){
        return(  
            <div className="Landing-container" >
                <Particles params={particleParams} />
                <div className="Landing-header">
                   
                        <div className="col-xs-10 col-sm-6 col-md-4 header-box">
                            <h1 className="text-center display-3">Sol Grove</h1>
                            <p className="text-center lead">Natural simulations for the curious</p>
                            <p className="text-center">Built with Javascript | Powered by P5js | Inspired by the Nature of Code</p>
                            <p className="text-center lead">
                                <Link to="/sim/vectors" className="btn btn-outline-primary btn-lg">Begin</Link>
                            </p>
                        </div>
                    
                </div>
            </div>
        )
    }
}

const particleParams = {
    particles:{
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6542f4'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                opacity_min: 0.1
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 6
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.5,
            width: 2
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            bounce: false,
            attract: {
                enable: false
            }
        }
    }   
}

export default Landing