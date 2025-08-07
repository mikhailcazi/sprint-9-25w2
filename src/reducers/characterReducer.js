export function characterReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.HEAD:
      return { ...state, head: action.value };
    case ACTION_TYPES.TORSO:
      return { ...state, torso: action.value };
    case ACTION_TYPES.SHOES:
      return { ...state, shoes: action.value };
    default:
      return state;
  }
}

export const ACTION_TYPES = {
  HEAD: "CHANGE_HEAD",
  TORSO: "CHANGE_TORSO",
  SHOES: "CHANGE_SHOES",
};
