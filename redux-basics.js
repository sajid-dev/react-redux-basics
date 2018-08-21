const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
  counter: 0
}


//Reducer
let rootReducer = (state = initialState, action) => {

  if (action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type == "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.val
    }
  }
  return state
}

//Store
const store = createStore(rootReducer);

//Subscribe
store.subscribe(() => {
  console.log(store.getState())
})


//Dispacher Action
store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", val: 5});



