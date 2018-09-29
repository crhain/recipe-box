import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Model from 'model/'
import Root from 'components/Root';
import RecipeList from 'components/RecipeList';
import RecipeView from 'components/Recipe/RecipeView';
import RecipeEdit from 'components/Recipe/Edit';
import RecipeNew from 'components/Recipe/New';
import 'components/App.css';

class App extends Component {
  componentWillMount(){
    Model.initialize();        
  }
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
