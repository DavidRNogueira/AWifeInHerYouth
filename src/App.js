import React from "react"
import {Router, Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import {createBrowserHistory} from "history"

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home}/>
    </Router>
  )
}

export default App;