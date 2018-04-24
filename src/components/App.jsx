import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './List';
import RecipeView from './Recipe/';
import RecipeEdit from './Recipe/Edit';
import RecipeNew from './Recipe/New';
import './App.css';

class App extends Component {
  render() {
    return (          
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/recipe/new" component={RecipeNew} />        
              <Route exact path="/recipe/:id" component={RecipeView} />              
              <Route exact path="/recipe/:id/edit" component={RecipeEdit} />              
              <Route exact path="/" component={RecipeList} />          
            </Switch>                  
          </div>      
      </BrowserRouter>   
    );
  }
}

export default App;
