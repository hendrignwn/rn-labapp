import api from '@src/services';
import { BrowseCatgoryParams } from './types';

export const commonActionTypes = {
  LOADING: 'loading',
  SCREEN_LOADING: 'screen_loading',
  HIDE_SCREEN_LOADING: 'hide_screen_loading',
  HIDE_LOADING: 'hide_loading',
};

export const getBrowseCategories =
  (params: BrowseCatgoryParams) => (dispatch: any) =>
    new Promise((resolve, reject) => {
      params.limit = 20;
      params.offset = 0;
      api
        .get('/v1/browse/categories', { params })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
