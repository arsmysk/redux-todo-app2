import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          id: "1",
          completed: false,
          description: "My todo 1"
        },
        {
          id: "2",
          completed: false,
          description: "My todo 2"
        },
        {
          id: "3",
          completed: false,
          description: "My todo 3"
        }
      ]
    }
  }


  toggleTask = (state, id) => {
    const { tasks } = state
    const newTasks = tasks.map(task => {
      if (task.id !== id) return { ...task }
      return { ...task, completed: !task.completed }
    })
    return { ...state, tasks: newTasks }

  }

  render() {
    const { tasks } = this.state
    const that = this
    return (
      <div>
        <ul> {tasks.map(function (task) {
          return (
            <li key={task.id}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
              onClick={() => {
                that.setState(that.toggleTask(that.state, task.id))
              }}
            >
              {task.description}
            </li>
          )
        })
        }
        </ul>
      </div>
    );
  }
}

export default App;
