import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { createStreams } from '../actions'
class StreamCreate extends React.Component{

   renderError = ({error, touched}) =>{
     if(error&&touched){
         return(<div>
              <Alert variant="danger">
    {error}
  </Alert>
         </div>)
     }
   }
   renderInput = ({label, input, meta}) =>{
       console.log('META-------', meta);
     return(
         <div className='field'>
           <label>{label}</label>
           <input {...input} autoComplete='off'/>
           
           {this.renderError(meta)}
         </div>
     )
   }
   
   onSubmit = (formValues) =>{
       console.log('000000', formValues)
       this.props.createStreams(formValues)
   }
    render(){
    return(
        <div>
        <form className='ui form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='title'
              component={this.renderInput}
              label='Enter Title'
            />
            <Field
              name='description'
              component={this.renderInput}
              label='Enter Description'
            />
             <Button variant="outline-primary" type='submit'>Submit</Button>
        </form>
        </div>
    )}
}

const validate = (formValues) =>{
    const errors = {};
    if(!formValues.title){
      errors.title='Enter title'
    }
    if(!formValues.description){
        errors.description='Enter description'
    }
    return errors;
}

const formWrapped = reduxForm({
    form: "streamCreate",
    validate: validate,
})(StreamCreate);

export default connect(null, { createStreams })(formWrapped);