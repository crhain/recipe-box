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
              <Route exact path="/recipe/new" component={RecipeNew} />        
              <Route exact path="/recipe/:id" component={RecipeView} />              
              <Route exact path="/" component={RecipeList} />          
            </Switch>                  
          </div>      
      </BrowserRouter>   
    );
  }
}

export default App;
