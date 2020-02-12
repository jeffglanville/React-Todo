import React, { Component } from 'react'
import {Formik} from 'formik';

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
                <Formik>
                <form onSubmit = {this.submitTask}>
                    <input type="text" name="task" onChange={this.handleChange} placeholder='add task here'/>
                    <select>
                        <option>Complete</option>
                        <option>Working on this</option>
                        <option>Finalizing</option>
                        <option>Did not Start</option>
                    </select>
                    <button>Add Todo</button>
                    <button>Clear Complete</button>
                </form>
                </Formik>
            </div>
        )
    }
}


export default TodoForm;