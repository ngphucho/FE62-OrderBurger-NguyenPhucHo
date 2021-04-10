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
  return { ...state };
};

export default burgerReducer;
