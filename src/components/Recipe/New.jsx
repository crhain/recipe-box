import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addRecipe } from "actions/";
import fields from "components/Form/fields";
import Form from "components/Form/Form";
import BackButton from "components/Buttons/BackButton";

 function New({ addRecipe, history }){            
    
    return (        
        <div>
            <h1>Create A New Recipe</h1>        
            <Form fields={fields} formHandler={ addRecipe } history={ history }/>
            <BackButton />
        </div>        
    );
    
        
}

// export default connect(null, { addRecipe })(withRouter(New));

export default withRouter(connect(null, { addRecipe })(New));
