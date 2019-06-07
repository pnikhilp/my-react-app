import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
class StreamList extends Component{
    
    componentDidMount = () =>{
        this.props.fetchStreams();
    }
    
    renderList = () =>{
        return this.props.streams.map(stream=>{
            return(
                <ul className='item' key={stream.id}>
                  <li className='content'>
                    <h3 style={{ fontSize: 20}}>{stream.title}</h3>
                  </li>
                  <div className='description'>
                    {stream.description}
                    <Link to={`streams/edit/${stream.id}`}>
                    <Button bsStyle="primary" bsSize='small' style={{ marginRight: 20, marginLeft: 20 }}>
                      Edit
                    </Button>
                    </Link>
                    <Button bsStyle="danger" bsSize='small' style={{ marginLeft: 2 }}>Delete</Button>
                  </div>
                </ul>
            )
        })
    }
    
    renderAdmin = () =>{

    }

    render(){
        return(
            <div className='container-fluid' style={{ marginTop: 50}}>
                <div>
                  <Link to='/newstream' >
                      <Button bsStyle='primary'>Create Stream</Button>
                  </Link>
                </div>
                <div style={{ margin: 50}}>
                  {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    streams: Object.values(state.streams)
})

export default connect(mapStateToProps, { fetchStreams })(StreamList);