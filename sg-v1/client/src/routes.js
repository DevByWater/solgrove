import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './Components/App'
import Landing from './Components/Landing/Landing'
import SketchMain from './Components/Sketch/SketchMain'

const routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/sim" component={SketchMain}/>
            </Switch>
        </App>
    </BrowserRouter>
)

export default routes