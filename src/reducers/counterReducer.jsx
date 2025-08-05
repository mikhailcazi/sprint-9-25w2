// state = { count: 11 }
// action = { type: "INCREMENT" }

function counterReducer(state, action) {
  if (action.type == "INCREMENT") {
    return { count: state.count + 2 };
  } else if (action.type == "DECREMENT") {
    return { count: state.count - 2 };
  } else {
    return state;
  }
}

// return value: {count: 12}
export default counterReducer;
