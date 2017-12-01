export const ADD_USER = 'ADD_USER'
export const DEL_USER = 'DEL_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const FETCH_USERS = 'FETCH_USERS'

export function addUser (user) {
  return {
    type: ADD_USER,
    payload: user,
  }
}
export function updateUser (user) {
  return {
    type: UPDATE_USER,
    payload: user,
  }
}
export function delUser (id) {
  return {
    type: DEL_USER,
    payload: {id},
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
    case UPDATE_USER:
      var {id,name,email} = action.payload
      return {
        ...state,
        users:state.users.map((user) => {
          if(user.id === id){
            return {
              id,
              name,
              email
            }
          }else{
            return user
          }
        })
      }
    case DEL_USER:
      var {id} = action.payload
      return {
        ...state,
        users:state.users.filter(
          (user) => {
            return user.id !== id
          }
        )
      }
    default:
      return state;
  }
}
