import React, { Component } from 'react'
import { BrowserRouter ,Routes ,Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Master from '../Component/mastertable'
import Login from '../Pages/login'
import ProtectedRoute from '../Pages/ProtectedRoutes'

export class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Routes>
          <Route exact path="/" element={<Login />}  />
          <Route exact path="/home" element={<Home/>} />
      
          </Routes> */}
          <Switch>
          <Route exact path="/" component={Login}  />
       
         
         <Route exact path="/home"  >
            <ProtectedRoute  component={Home} />
         </Route>
         <Route exact path="/master"  >
            <ProtectedRoute  component={Master} />
         </Route>
      
      
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router