import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  {
    key: 0,
    text: 'Unmotivated?',
    value: 'Unmotivated',
  },
  {
    key: 1,
    text: 'Upset?',
    value: 'Upset',
  },
  {
    key: 2,
    text: 'Hungry?',
    value: 'Hungry',
  },
  {
    key: 3,
    text: 'Restless?',
    value: 'Restless',
  },
  {
    key: 4,
    text: 'Bored?',
    value: 'Bored',
  },
  {
    key: 5,
    text: 'Ready?',
    value: 'Ready',
  },
]

const Menu = () => (

  
  <span>
    R U{' '}
    <Dropdown 
      inline
      options={options}
      defaultValue={options[0].value}
      // onLabelClick={this.setState(state => ({
      //   textBox: 'Ope!'}))}
    />
  </span>
)
// class Menu extends React.Component {
//   render() {
//     return(
//       <div>
//         <label for="menu">feeling?</label>
//         <select name="menu" id="menu">
//           <option value='bored'>bored</option>
//           <option value='hungry'>hungry</option>
//           <option value='unmotivated'>unmotivated</option>
//         </select>
//       </div>
//     )
//   }
// }


export default Menu


