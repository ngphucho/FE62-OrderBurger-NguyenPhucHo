import { TANG_GIAM_BURGER } from "../constants/burgerConstant";

const bergurState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 10,
    beef: 10,
  },
  total: 30,
};

const burgerReducer = (state = bergurState, action) => {
  switch (action.type) {
    case TANG_GIAM_BURGER: {
      const { payload } = action;
      const { burger, total, menu } = state;
      if (payload.status) {
        burger[payload.foodName] += 1;
        return { ...state, burger, total: total + menu[payload.foodName] };
      } else {
        burger[payload.foodName] -= 1;
        return { ...state, burger, total: total - menu[payload.foodName] };
      }
    }
    default:
      return state;
  }
};

export default burgerReducer;
