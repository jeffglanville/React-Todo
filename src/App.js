import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';




class App extends React.Component {
  constructor(){
    super();
    this.state={
      task1: "",
    }
  }

  addTask = (e, todo) => {
    e.preventDefault();

    const newTodo = {
      name: todo,
      id: Date.now(),
      complete: false
    };
    this.setState({
      task: [...this.state.task, newTodo]
    });
  };

  toggleTask = taskID => {
    this.setState({
      task: this.state.groceries.map(item => {
        if (taskID === item.id) {
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
      task: this.state.task.filter(item => item.complete === false)
    });
  };


  render() {
    return (
      <div className="App">
          <div className='header'>
            <h1>ToDo List</h1>
            <TodoForm addTask={this.addTask} />
          </div>
          <TodoList
          task={this.state.task}
          toggleTask={this.toggleTask}
          clearComplete={this.clearComplete}
          />
      </div>
    );
  }
}

export default App;




// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state