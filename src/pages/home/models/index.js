import uuid from 'uuid/v4';
import {
  getHomePageData
} from '../../../services/home';

export default {
  namespace: 'home',
  state: {
    list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/home') {
          dispatch({ type: 'getHomePageData' });
        }
      })
    }
  },

  effects: {
    *getHomePageData(_, { call, put }) {
      const result = yield call(getHomePageData);
      if (result) {
        let payload = [];        
        if (Array.isArray(result)) {
          result.map(data => {
            payload.push({
              id: uuid().replace(/\-/g, ''),              
              ...data,
            })
          })
        }
        payload.sort((a, b) => +new Date(a.date) < +new Date(b.date));
        yield put({ type: 'saveList', payload });
      }
    }
  },

  reducers: {
    saveList(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    }
  },
}