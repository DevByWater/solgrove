import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
// import '../../assets/lib/p5.min'
// import '../../assets/lib/p5.dom.min'

import sketchFetcher from '../../helpers/sketchFetcher'

class SketchWindow extends Component{
    render(){
        let topic = this.props.match.params.topic
        let sketch = sketchFetcher(topic) || null
        if(sketch === null){
            return(
                <div className="container">
                    Loading...  
                </div>
            )
        }

        return(
            <P5Wrapper sketch={sketch} />
        )
    }
}

export default SketchWindow