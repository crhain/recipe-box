import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from 'components/Root';
import RecipeList from 'components/RecipeList';
import RecipeView from 'components/Recipe/RecipeView';
import RecipeEdit from 'components/Recipe/Edit';
import RecipeNew from 'components/Recipe/New';
import 'components/App.css';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';

class App extends Component {  
  render() {
    return (          
        <Root>
          <div>
            <Switch>
              <Route exact path="/recipe/new" component={RecipeNew} />        
              <Route exact path="/recipe/:id" component={RecipeView} />              
              <Route exact path="/recipe/:id/edit" component={RecipeEdit} />              
              <Route exact path="/" component={RecipeList} />          
            </Switch>                  
          </div>      
      </Root>   
    );
  }
}

export default App;
