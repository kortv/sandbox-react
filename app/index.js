import React, { Component } from 'react';
import { render } from 'react-dom';
require('babel-core/register');
require('babel-polyfill');

class Container extends Component {
  constructor() {
    super();
    this.state = {
      title: 'ReactJS!',
      txt: 'see you soon'
    };
  }
  handleClick = (e) => {
    console.log(e.target, 'ogo');
    this.setState({
      title: 'React wow effect!!!'
    });
  }
  handleClick2 = () => {
    this.setState({
      title: this.state.txt
    });
  }
  handleChange = (e) => {
    console.log(e.target, e.target.value);
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    return (
    <Wrapper header={this.state.title}>
      <Welcome onClick={this.handleClick} name={'Tim'} />
      <Hello
        onClick={this.handleClick2} txt={this.state.txt}
        onChange={this.handleChange} title={this.state.title}
      />
    </Wrapper>
    );
  }
}


function Wrapper(props) {
  return (
    <div style={{ backgroundColor: 'pink' }}>
      <h1> {props.header} </h1>
      {props.children}
    </div>
  );
}


function Welcome(props) {
  return (
    <div><div>Welcome {props.name}!</div>
      <button onClick={props.onClick}>Change Header</button>
    </div>
  );
}

function Hello(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <input onChange={props.onChange} />
      <button onClick={props.onClick}>{props.txt}</button>
    </div>
  );
}

render(<Container />, document.getElementById('app'));

const loadStory = () => {
  console.log('ready');
  setTimeout(() => {console.log('set');}, 1000);
};

(async function() {
  try {
    // Просто дожидаемся результата из промиса
    await loadStory();
    console.log('Yey, story successfully loaded!');
  } catch (e) {
    console.log(e);
  }
})();
