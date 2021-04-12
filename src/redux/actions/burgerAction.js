import { TANG_GIAM_BURGER } from "../constants/burgerConstant";

export const changeAmount = (foodName, status) => {
  return {
    type: TANG_GIAM_BURGER,
    payload: { foodName, status },
  };
};
