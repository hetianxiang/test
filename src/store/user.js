export const ADD_USER = 'ADD_USER'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'
export const FETCH_USERS = 'FETCH_USERS'


export function addUser (user) {
  return {
    type: ADD_USER,
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
    case ADD_USER:
      var {id, name, email} = action.payload
      return {
        ...state,
        users:[...state.users,{
          id,
          name,
          email
        }]
      }
    default:
      return state;
  }
}
