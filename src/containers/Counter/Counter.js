import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr}/>
        <CounterControl label="Increment" clicked={this.props.incrementByOne}/>
        <CounterControl label="Decrement" clicked={this.props.decrementByOne}/>
        <CounterControl label="Add 5" clicked={this.props.add}/>
        <CounterControl label="Subtract 5" clicked={this.props.sub}/>
        <hr/>
        <button onClick={() => this.props.showResults(this.props.ctr)}>Show Results</button>
        <ul>
          {this.props.storedResult.map(stres => (
            <li onClick={() => this.props.deleteResult(stres.id)} key={stres.id}>{stres.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResult: state.res.result
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    incrementByOne: () => dispatch(actionType.increment()),
    decrementByOne: () => dispatch(actionType.decrement()),
    add: () => dispatch(actionType.addition(5)),
    sub: () => dispatch(actionType.subtraction(5)),
    showResults: (result) => dispatch(actionType.storeResult(result)),
    deleteResult: (id) => dispatch(actionType.deleteResule(id)),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
