export function colorReducer(state, action) {
  switch (action) {
    case "ORANGE":
      return { sColor: "Orange", pColor1: "Red", pColor2: "Yellow" };
    case "GREEN":
      return { sColor: "Green", pColor1: "Yellow", pColor2: "Blue" };
    case "PURPLE":
      return { sColor: "Purple", pColor1: "Red", pColor2: "Blue" };
    default:
      return state;
  }
}

function cashier(item) {
  let taxes, discount;
  switch (item) {
    case "fruit":
      discount = 10;
      taxes = 12;
      break;
    case "home decor":
      discount = 20;
      taxes = 12;
      break;
    case "kitchen":
      discount = 0;
      taxes = 1;
      break;
    default:
      discount = 0;
      taxes = 10;
  }
  return { taxes, discount };
}
