import React from 'react';
import MyForm from './components/MyForm';
import ToggleButton from './components/ToggleButton';
import TodoList from './components/TodoList';
import store from './store'
import { addTodoAction, currentAction } from './actions'

const App = () => {
  const tasks = store.getState().todo
  const current = store.getState().current
  return (
    <div>
      <MyForm myEvent={description => store.dispatch(addTodoAction(description))} />
      <TodoList
        tasks={tasks}
        current={current} />
      <p>{current}</p>
      <ToggleButton onClick={() => store.dispatch(currentAction('done'))}>done</ToggleButton>
      <ToggleButton onClick={() => store.dispatch(currentAction('not yet'))}>not yet</ToggleButton>
      <ToggleButton onClick={() => store.dispatch(currentAction('all'))}>all</ToggleButton>
    </div>
  );
}
export default App;
