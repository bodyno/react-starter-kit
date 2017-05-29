import React ,{Component}from 'react'
import { Button } from 'antd'

class Counter extends Component {
  render(){
    const {increment,doubleAsync,counter} = this.props;
    return(
      <div style={{ margin: '0 auto' }}>
        <h2>Counter: {counter}</h2>
        <Button type="primary" onClick={increment}>
          Increment
        </Button>
        {' '}
        <Button type="danger" onClick={doubleAsync}>
          Double (Async)
        </Button>
      </div>
    )
  }
}


Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
