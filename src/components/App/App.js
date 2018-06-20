import React, { Component } from 'react';
import Header from '../Header/Header'

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      star: {
        name: '',
        achievement: ''
      }
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.star);
    this.setState({
      star: {
        name: '',
        achievement: ''
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.star.name} placeholder="Star Name"/>
          <input value={this.state.star.achievement} placeholder="What is this stars most significant achievement?"/>
          <input type="submit" value="Submit"/>
          <p>{this.state.star.name} and {this.state.user.achievement}</p>
        </form>



      </div>
    );
  }
}

export default App;
