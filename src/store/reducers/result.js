import * as actionType from "../actions/actions";

const initialState = {
  result: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({id: new Date(), value: action.result})
      }
    case actionType.DELETE_RESULT:
      let newArray = state.result.filter(result => result.id !== action.resultId);
      return {
        ...state,
        result: newArray
      }
    default:
      return state
  }
}

export default reducer;