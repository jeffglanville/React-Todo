import React from 'react'

const task = [
    {
      task: 'clean the floor',
        id: Date.now(),
        complete: false
    },

    {
      task: 'wash the car',
      id: Date.now(),
      complete: false
    },

    {
      task: 'learn from Lambda',
      id: Date.now(),
      complete: false
    },

  ]



class Todo extends React.Component {
    constructor(){
        super();
        this.state={
            task
        }
    }

    render(props) {
        return (
            <div className={`Todo${props.Todo.complete ? "complete" : ""}`}
                onClick={() => this.props.toggleTodo(props.Todo.id)}
            >
            </div>
        )
    }
}


export default Todo;