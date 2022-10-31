import api from '@src/services';
import { commonActionTypes } from './common/action';

export default function apiInterceptors(store: any) {
  const { dispatch } = store;
  api.interceptors.response.use((resp) => {
    if (resp.data.success === false) {
      const error = new Error(resp.data.message);
      // Attach the response instance, in case we would like to access it.
      dispatch({ type: commonActionTypes.HIDE_LOADING });
      if (resp.data.message === 'Unathorized') {
        console.log(resp);
        // dispatch(onLogoutProcess());
      }
      throw error;
    }
    return resp;
  });
}
