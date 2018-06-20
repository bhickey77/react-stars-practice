import React, { Component } from 'react';

class Star extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            star: {
                name: '',
                achievement: ''
            },
            starList: [
                {name: 'deric', achievement: 'code'},
                {name: 'sasha', achievement: 'comedy'}
            ]
        }
    }
  
  handleSubmit = event => {
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

  handleChangeFor = propertyName => event => {
    console.log(event.target.value);
    this.setState({
      star: {
        ...this.state.star,
        [propertyName]: event.target.value
      }
    });
    console.log(this.state.star.name);
  }

  render() {
    return (
      <div className="Star">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.star.name} onChange={this.handleChangeFor('name')} placeholder="Star Name"/>
          <input value={this.state.star.achievement} onChange={this.handleChangeFor('achievement')} placeholder="What is this stars most significant achievement?"/>
          <input type="submit" value="Submit"/>
          <p>{this.state.star.name} and {this.state.star.achievement}</p>
        </form>
        <ul>
            {this.state.starList.map(star => <li>{star.name} is famous for {star.achievement}</li>)}
        </ul>
      </div>
    );
  }
}

export default Star;
