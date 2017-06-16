import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe_list/recipe-list';
import RecipeView from './recipe_view/recipe-view';
import RecipeNew from './recipe_new/recipe-new';
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
