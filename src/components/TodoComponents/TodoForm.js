import React from 'react'


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            task1: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitTask}>
                    <input type="text" name='task' onChange={this.handleChange}/>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}


export default TodoForm;