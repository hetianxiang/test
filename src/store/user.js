export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'
export const FETCH_USERS = 'FETCH_USERS'


export function add (user) {
  return {
    type: ADD,
    payload: user,
  }
}
export function fetchUsers (users) {
  return {
    type: FETCH_USERS,
    payload: users,
  }
}

const initialState = {
  users:[]
}

export default function userReducer (state = initialState, action) {
  switch(action.type){
    case FETCH_USERS:
      return {
        ...state,
        users:action.payload
      }
    default:
      return state;
  }
}
