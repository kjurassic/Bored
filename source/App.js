
import React from "react";
import { hot } from 'react-hot-loader/root';
import Menu from './dropdown';
import {Button, Segment, Input} from 'semantic-ui-react'
// import toDo from './input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: 'I can tell you what to do to fix that!',
      selection: 'bored',
      responses: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then(quotes => {
      this.setState({responses: quotes});
    })
  }
  
  randomNum (arr) {
    return Math.floor(Math.random() * arr.length)
  }

  handleClick () {
    const i = this.randomNum(this.state.responses)
    const quote = this.state.responses[i]
    this.setState(state => ({
      textBox: `${quote.text} -- ${quote.author}`
    }))
  }

  fetchResponses () {
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then(quotes => {
      this.setState({responses: quotes});
    })
  }

  render() {
    const { name } = this.props;

    const addToDo = () => (
      <Input action='Add' placeholder='To do...'/>
    )


    return (
      <div>
        <h1>
          {Menu()}
        </h1> 
    <Segment inverted color='violet' id='results'>{this.state.textBox}</Segment>
        <Button primary id='go' onClick={this.handleClick}>Let's Go</Button>
        <br></br>
        {addToDo()}
      </div>
    );
  }
}

export default hot(App);