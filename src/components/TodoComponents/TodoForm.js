import React from 'react'
import './Todo.css';


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            item1: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
    };

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input type='text' name='task' placeholder="Type Task Here" onChange={this.handleChanges} />
                <button>Add Task</button>
            </form>
        )
    }
}


export default TodoForm;