import React from 'react'
import './Todo.css';


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            task: ""
        };
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ task: e.target.value })
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
        this.setState({ task: " " })
    };

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input type='text' value={this.state.task} name='task' placeholder="Type Task Here" onChange={this.handleChanges} />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}


export default TodoForm;