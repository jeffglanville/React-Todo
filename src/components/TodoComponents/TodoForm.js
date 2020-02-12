import React, { Component } from 'react'
import {Formik} from 'formik';

class TodoForm extends Component {

    render() {
        return (
            <div>
                <Formik>
                <form onSubmit = {this.submitTodo}>
                    <input type="text" name="todo" onChange={this.handleChanges} placeholder='add item here'/>
                    <select>
                        <option>Complete</option>
                        <option>Working on this</option>
                        <option>Finalizing</option>
                        <option>Did not Start</option>
                    </select>
                </form>
                </Formik>
            </div>
        )
    }
}


export default TodoForm;