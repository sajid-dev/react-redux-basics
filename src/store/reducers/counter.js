import * as actionType from '../actions/actions';

const initialState = {
  counter: 0,
  result: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionType.ADDITION:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionType.SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default:
      return state
  }
}

export default reducer;