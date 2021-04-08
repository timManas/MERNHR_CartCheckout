import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return state
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
