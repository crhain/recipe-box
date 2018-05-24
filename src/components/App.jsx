import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from 'components/RecipeList';
import RecipeView from 'components/Recipe/RecipeView';
import RecipeEdit from 'components/Recipe/Edit';
import RecipeNew from 'components/Recipe/New';
import 'components/App.css';

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
