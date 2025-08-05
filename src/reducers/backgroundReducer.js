export function backgroundReducer(state, action) {
  switch (action.type) {
    case "FASTER":
      return { speed: state.speed + 10 };
    case "SLOWER":
      return { speed: state.speed - 10 };
    default:
      return state;
  }
}

// action = {type: "FASTER"}
// state = { speed: 10 }
