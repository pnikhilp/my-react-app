import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class EditStream extends React.Component{
    componentDidMount = () =>{
        console.log('SELECTED--->', this.props.match.params.id)
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{
        const id = this.props.match.params.id;
        this.props.editStream(id, formValues);
    }

    render(){
        if(!this.props.stream){
            return <div style={{ margin: 100 }}>Loading...</div>
        }
        return(<div style={{ margin: 100 }}> 
               <div>{this.props.stream.title}</div>
             <StreamForm initialValues={{ title: 'Edit title', description: 'Edit description' }} onSubmit={this.onSubmit} />
          </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>({
  stream: state.streams[ownProps.match.params.id-1]
})

export default connect(mapStateToProps, { fetchStream, editStream })(EditStream);