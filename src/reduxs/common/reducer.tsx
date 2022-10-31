import { commonActionTypes } from './action';

const initialState = {
  loading: false,
  screenLoading: false,
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case commonActionTypes.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case commonActionTypes.HIDE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case commonActionTypes.SCREEN_LOADING: {
      return {
        ...state,
        screenLoading: true,
      };
    }
    case commonActionTypes.HIDE_SCREEN_LOADING: {
      return {
        ...state,
        screenLoading: false,
      };
    }
    default:
      return state;
  }
};
