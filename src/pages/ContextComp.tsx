import React, { createContext } from 'react';

export interface ContextCompProps {
  
}
 
export interface ContextCompState {
  
}

const BatteryContext = createContext(0);

function Middle() {
  return (
    <BatteryContext.Consumer>
      {
        value => {
          return (
            <div>{ value }</div>
          )
        }
      }
    </BatteryContext.Consumer>
  )
}
 
class ContextComp extends React.Component<ContextCompProps, ContextCompState> {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state;
    return (
      <BatteryContext.Provider value={count}>
        <Middle />
        <button onClick={ () => { this.setState({ count: count + 1 }) } }>add</button>
      </BatteryContext.Provider>);
  }
}
 
export default ContextComp;