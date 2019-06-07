import React from 'react';
import { connect } from 'react-redux';
import { createStreams } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{
  
   onSubmit = (formValues) =>{
       this.props.onSubmit(formValues)
   }

    render(){
    return(
        <div className='container-fluid' style={{ margin: 100}}>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
    )}
}

export default connect(null, { createStreams })(StreamCreate);