import {
  getPageType
} from '@/services/global';
export default {
  state: {
    list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/type') {
          dispatch({ type: 'getPageType' });
        }
      })
    }
  },
  effects: {
    *getPageType(_, { call, put }) {
      const result = yield call(getPageType);
      if (result) {
        yield put({ type: 'saveList', payload: result });
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
  }
}