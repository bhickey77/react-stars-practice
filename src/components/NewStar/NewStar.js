import React, { Component } from 'react';
import './NewStar.css'

class NewStar extends Component {
  render() {
    return (
      <div className="Star">
        <h1>Add a Star</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} placeholder="Star Name"/>
          <input value={this.props.newStar.achievement} onChange={this.props.handleChangeFor('achievement')} placeholder="What is this stars most significant achievement?"/>
          <input type="submit" value="Submit"/>
          {/* <p>{this.props.newStar.name} and {this.props.newStar.achievement}</p> */}
        </form>
      </div>
    );
  }
}

export default NewStar;
