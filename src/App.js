import React from 'react';
// import App from './App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '20px',
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <ul>
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