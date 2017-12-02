import React, { Component } from 'react';
import MyForm from './components/MyForm';
import ToggleButton from './components/ToggleButton';
import TodoList from './components/TodoList';
import store from './store'
import { addTodoAction, toggleTodoAction } from './actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 'all'
    }
  }

  render() {
    const tasks = store.getState()
    const { current } = this.state
    return (
      <div>
        <MyForm myEvent={description => store.dispatch(addTodoAction(description))} />
        <TodoList
          tasks={tasks}
          current={current}
          $parent={id => store.dispatch(toggleTodoAction(id))} />
        <p>{this.state.current}</p>
        <ToggleButton onClick={() => this.setState(prev => ({ ...prev, current: "done" }))}>done</ToggleButton>
        <ToggleButton onClick={() => this.setState(prev => ({ ...prev, current: "not yet" }))}>not yet</ToggleButton>
        <ToggleButton onClick={() => this.setState(prev => ({ ...prev, current: "all" }))}>all</ToggleButton>
      </div>
    );
  }
}

export default App;
