import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Alert } from 'react-bootstrap';

class StreamForm extends React.Component{
  renderError = ({error, touched}) =>{
     if(error&&touched){
         return(<div>
              <Alert bsStyle="danger">
                 {error}
              </Alert>
         </div>)
     }
   }

  renderInput = ({label, input, meta}) =>{
     return(
         <div className='field'>
           <label>{label}</label>
           <input {...input} autoComplete='off'/>
           {this.renderError(meta)}
         </div>
     )
   }
   
   onSubmit = (formValues) =>{
       this.props.onSubmit(formValues)
   }

    render(){
    return(
        <div>
        <form className='' onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='title'
              component={this.renderInput}
              label='Title    '
            />
            <Field
              name='description'
              component={this.renderInput}
              label='Description'
            />
             <Button bsStyle="primary" bsSize='small' type='submit' style={{ marginTop: 10, marginLeft: 100 }}>SUBMIT</Button>
        </form>
        </div>
    )}
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
      errors.title='Enter title'
    }
    if(!formValues.description){
        errors.description='Enter description'
    }
    return errors;
}

export default reduxForm({
    form: "streamCreate",
    validate: validate,
})(StreamForm);
