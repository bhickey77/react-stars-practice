import React, { Component } from 'react';
import Header from '../Header/Header'
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
        star: {
            name: 'asdfd',
            achievement: 'qwee'
        },
        starList: [
            {name: 'deric', achievement: 'code'},
            {name: 'sasha', achievement: 'comedy'}
        ]
    }
    
    this.handleSubmit = event => {
      event.preventDefault();
      console.log('star: ', this.state.star);
          this.setState({
              starList: [
                  ...this.state.starList,
                  this.state.star
              ],
              star: {
                  name: '',
                  achievement: ''
              }
          });
    }

    this.handleChangeFor = propertyName => event => {
      console.log(event.target.value);
      this.setState({
        star: {
          ...this.state.star,
          [propertyName]: event.target.value
        }
      });
      console.log(this.state.star.name);
    }

  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <NewStar newStar={this.state.star} 
                handleSubmit={this.handleSubmit} 
                handleChangeFor={this.handleChangeFor}/>
        <StarList starList={this.state.starList} />
      </div>
    );
  }
}

export default App;
