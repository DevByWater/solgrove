import React, { Component } from 'react'


class Landing extends Component{
    render(){
        return(
            <div className="Landing-container">
                <div className="jumbotron Landing-header">
                    <h1 className="text-center display-3">Sol Grove</h1>
                    <p className="text-center lead">Natural simulations for the curious</p>
                    <p>Built with javascript & Powered by P5</p>
                    <p className="text-center lead">
                        <a className="btn btn-outline-success btn-lg">Begin</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Landing