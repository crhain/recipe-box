import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './RecipeList/';
import RecipeView from './RecipeView/';
import RecipeNew from './RecipeNew/';
import './App.css';

class App extends Component {
  render() {
    return (          
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/recipe/new" component={RecipeNew} />        
              <Route path="/recipe/:id" component={RecipeView} />              
              <Route path="/" component={RecipeList} />          
            </Switch>                  
          </div>      
      </BrowserRouter>   
    );
  }
}

export default App;
