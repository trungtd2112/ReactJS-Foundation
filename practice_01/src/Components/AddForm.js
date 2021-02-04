import React, { Component } from 'react';
import Form from './Form';

class AddForm extends Component {
  
    checkState = () => {
        if(this.props.willShowForm === true){
            return <Form></Form>
        }
        return;
    }
    
    render() {
        return (
            <div>
                {this.checkState()}
            </div>
        );
    }
}

export default AddForm;