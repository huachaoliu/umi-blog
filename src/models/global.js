export default {
  namespace: 'global',

  state: {
    showUserInfo: false,
    notices: [],
  },
  subscriptions: {},
  effects: {},
  reducers: {
    showUserInfo(state, { payload }) {
      return {
        ...state,
        showUserInfo: payload
      }
    }
  },
}