import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


class App extends React.Component {

  render() {
    return (
      <div>
        <h2>What is on Tap for today?</h2>
        <TodoForm />
        <Todo />
      </div>
    );
  }
}

export default App;




// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state