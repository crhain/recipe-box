import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Root } from 'components/Root';
import RecipeList from 'components/RecipeList';
import RecipeView from 'components/Recipe/RecipeView';
import RecipeEdit from 'components/Recipe/Edit';
import RecipeNew from 'components/Recipe/New';
import Header from 'components/Header';
import MessageDisplay from 'components/MessageDisplay';
import 'components/App.css';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';

class App extends Component { 
  render() {
    return (          
        <Root>
          <div>
            <Header />
            <MessageDisplay />
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
