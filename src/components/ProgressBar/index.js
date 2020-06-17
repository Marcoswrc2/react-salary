import React, { Component } from 'react';
import './style.css';

class Filler extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='filler' style={{ width: `${this.props.percentage}%`, backgroundColor: this.props.color }}>
        {this.props.percentage ? (
          <p style={{ textAlign: 'center', margin: 0, color: 'white', fontWeight: 'bold' }}>{this.props.percentage}%</p>
        ) : null}
      </div>
    );
  }
}

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='progress-bar'>
        <Filler percentage={this.props.percentage3} color='#e67e22' />
        <Filler percentage={this.props.percentage2} color='#c0392b' />
        <Filler percentage={this.props.percentage1} color='#16a085' />
      </div>
    );
  }
}
