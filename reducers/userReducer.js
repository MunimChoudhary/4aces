export const userReducer = (state = { loggedin: false }, action) => {
  const { type, payload } = action
  switch (type) {
    case 'USER_LOGIN':
      return { ...state, loggedin: true }
    default:
      return state
  }
}
