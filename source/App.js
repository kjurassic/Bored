
import React from "react";
import { hot } from 'react-hot-loader/root';
import Menu from './dropdown';
import {Button, Segment, Input} from 'semantic-ui-react'
import toDo from './input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: 'I can tell you what to do to fix that!',
      selection: 'bored'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // console.log(Options)
    // console.log('this is:', this);
    this.setState(state => ({
      textBox: 'Hey, I got something to happen!'
    }))
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          {Menu()}
        </h1> 
    <Segment inverted color='violet' id='results'>{this.state.textBox}</Segment>
        <Button primary id='go' onClick={() => this.handleClick()}>Let's Go</Button>
        <br></br>
        {toDo()}
      </div>
    );
  }
}

export default hot(App);