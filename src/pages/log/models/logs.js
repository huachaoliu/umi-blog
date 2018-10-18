import {
  getPageLogs
} from '@/services/global';
export default {
  state: {
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/log') {
          dispatch({ type: 'getPageLogs' });
        }
      })
    }
  },
  effects: {
    *getPageLogs(_, { call, put }) {
      const result = yield call(getPageLogs);
      if (result) {
        yield put({ type: 'saveList', payload: result });
      }
    }
  },
  reducers: {
    saveList(state, { payload }) {
      return {
        ...state,
        list: payload,
      }
    }
  }
}