import {get, post, put, del} from './index'

export function getUsers(){
  return get('/api/users')
}
export function postUsers(data){
  return post('/api/users',data)
}