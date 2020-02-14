import React, { Component } from 'react'


class TodoForm extends Component {
    constructor(){
        super();
        this.state={
            task: "",
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
    };

    render() {
        return (
            <div>
                
                <form onSubmit = {this.submitTask}>
                    <input type="text" name="task" onChange={this.handleChange} placeholder='add task here'/>
                    <button>Add Todo</button>
                </form>
                
            </div>
        )
    }
}


export default TodoForm;