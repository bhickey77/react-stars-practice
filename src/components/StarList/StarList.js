import React, { Component } from 'react';
import Star from '../Star/Star'
import './StarList.css'

class StarList extends Component {
  render() {
    return (
      <div className="StarList">
        <ul>
             {this.props.starList.map(star => <Star star={star} />)}
        </ul>
      </div>
    );
  }
}

export default StarList;
