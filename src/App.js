import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { HashRouter, Route,Switch } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write';

import Header from './common/header'
import { GlobalStyle } from './style'
import store from './store'

class App extends Component {
  render() {
    return (     
      <Provider store={store} >
       <GlobalStyle />
        <HashRouter> 
          <div> 
            <Header />
              
              <Switch>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/detail/:id' exact component={Detail} ></Route>
              <Route path='/login'  component={Login}></Route>
              <Route path='/write'  component={Write}></Route>
              </Switch>
      
          </div>
        </HashRouter>
      
        
        </Provider>
    );
  }
}

export default App;