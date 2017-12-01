import {get, post, put, del} from './index'

export function getUsers(){
  return get('/api/users')
}
export function postUsers(data){
  return post('/api/users',data)
}
export function putUsers(id,data){
  return put('/api/users/'+id,data)
}
export function delUsers(id){
  return del('/api/users/'+id)
}