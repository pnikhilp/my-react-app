import React, { Component } from 'react';
import NavbarHeader from '../common/NavbarHeader';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';
import Footer from '../components/Footer';
export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            todos: []
        }
    }
    logout = () =>{
        const {history} = this.props;
        history.push('/login')
    }
    handleChange = (event) =>{
        console.log('--add todo---', event.target.value)
    }
    render(){
        return(
            <div >
             <NavbarHeader logoutApp={this.logout} />
                {/* <h2>Dashboard</h2> */}
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            {/* <div className='col-md-8'>
            <form onSubmit={this.addTodo}>
            //   <label>ADD TODO</label>
              <input placeholder="addTodo" onChange={this.handleChange} />
              <Button bsSize='medium' bsStyle='primary' type='submit' >ADD TODO</Button>
              </form>
            </div>
            <div className='col-md-4'>
               col-md-4
            </div> */}
            </div>
        )
    }
}