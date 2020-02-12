import React from 'react'
import 

const Task = [
    {
        task: "Mow the Lawn",
        id: Date.now(),
        complete: false
    },
    {
        task: "Learn React 2",
        id: Date.now(),
        complete: false
    },
    {
        task: "Work",
        id: Date.now(),
        complete: false
    },
    {
        task: "Cook Dinner",
        id: Date.now(),
        complete: false
    },
    {
        task: "Drink a glass of water",
        id: Date.now(),
        complete: false
    }
]


class Todo extends React.Component {
    constructor(){
        super();
        this.state={
            Task
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}




export default Todo;