import {
  getDataTags
} from '@/services/global';
export default {
  state: {
    showUserInfo: false,
    tags: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        dispatch({ type: 'getDataTags' });
      })
    }
  },
  effects: {
    *getDataTags(_, { select, call, put }) {
      const { tags } = yield select(state => state.global);
      if (tags.length) return;
      const result = yield call(getDataTags);
      if (result) {
        yield put({ type: 'saveTags', payload: result });
      }
    }
  },
  reducers: {
    showUserInfo(state, { payload }) {
      return {
        ...state,
        showUserInfo: payload
      }
    },
    saveTags(state, { payload }) {
      return {
        ...state,
        tags: payload
      }
    },
  },
}