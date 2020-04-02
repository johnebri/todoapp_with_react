import React from 'react';
// import App from './App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '20px',
}

let id = 0;

const Todo = props => (
  <li>
    <input onChange={props.onToggle} type="checkbox" checked={props.todo.checked} />
    <button onClick={props.onDelete} > Delete </button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("TODO text please!")
    this.setState({
      todos: [
        ...this.state.todos, 
        {id: id++, text: text, checked: false },
      ],
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  } 

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div>Todo Count: {this.state.todos.length}</div>
    <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => 
            <Todo 
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)} 
              todo={todo} 
            />
          )}
        </ul>
      </div>
    )
  }
  
}

export default App;

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   increaseCount() {
//     this.setState({count: this.state.count + 1})
//   }

//   render() {
//     return (
//       <div style={styles}>

//         <div>
//           <button onClick={() =>  this.increaseCount()}>Increase</button>
//         </div>

//         <h1> {this.state.count}</h1>
//       </div>
//     )
//   }
  
// }

// export default App;