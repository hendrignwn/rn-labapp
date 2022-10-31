export const commonActionTypes = {
  LOADING: 'loading',
  SCREEN_LOADING: 'screen_loading',
  HIDE_SCREEN_LOADING: 'hide_screen_loading',
  HIDE_LOADING: 'hide_loading',
};

export const hideLoading = () => (dispatch: any) => {
  dispatch({ type: commonActionTypes.HIDE_LOADING });
};

export const showLoading = () => (dispatch: any) => {
  dispatch({ type: commonActionTypes.LOADING });
};
