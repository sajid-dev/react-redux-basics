export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADDITION = "ADDITION";
export const SUBTRACTION = "SUBTRACTION";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}
export const addition = (val) => {
  return {
    type: ADDITION,
    value: val
  }
}
export const subtraction = (val) => {
  return {
    type: SUBTRACTION,
    value: val
  }
}
export const saveResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res
  }
}
export const storeResult = (res) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res))
    }, 2000)
  }
}
export const deleteResule = (resId) => {
  return {
    type: DELETE_RESULT,
    resultId: resId
  }
}