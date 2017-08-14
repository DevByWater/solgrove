import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './Components/App'
import Landing from './Components/Landing'
import SketchMain from './Components/Sketch/SketchMain'

const routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Landing />
                
            </Switch>
        </App>
    </BrowserRouter>
)

export default routes