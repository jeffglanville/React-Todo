import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';
import './App.css';




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

class App extends React.Component {
  constructor(){
    super();
    this.state={
      task
    }
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      complete: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  toggleTask = taskID => {
    this.setState({
      task: this.state.task.map(item => {
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
    this.setState({
      task: this.state.task.filter(task => !task.complete === false)
    });
  };


  render() {
    return (
      <div className="App">
          <div className='header'>
          <i class="fas fa-tasks"></i>
            <h1>To Do List</h1>
          </div>
          <div>
            <TodoForm addTask={this.addTask} />
          <TodoList
            task={this.state.task}
            toggleTask={this.toggleTask}
            clearComplete={this.clearComplete}
          />
          </div>
      </div>
    );
  }
}

export default App;




// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state