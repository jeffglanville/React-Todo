import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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

    toggleItem = itemId => {
        this.setState({
            Task: this.state.task.map(item => {
                if (itemId === item.id) {
                    return {
                        ...item,
                        complete: !item.complete
                    };
                }
                return item;
            })
        });
    };

    clearComplete = e => {
        e.preventDefault();
        this.setState({
            Task: this.state.groceries.filter(item => item.complete === false)
        })
    }


    render() {
        return (
            <div>
                <div>
                    <TodoForm addItem={this.addItem} />
                </div>
                <TodoList
                    Task={this.state.task}
                    toggleItem={this.toggleItem}
                    clearComplete={this.ClearComplete}
                />
            </div>
        )
    }
}




export default Todo;