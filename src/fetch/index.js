import 'whatwg-fetch' 
import 'es6-promise'

const HOST = 'https://www.mxcins.com';
//后台的URL地址
export function get(url){
  return fetch(HOST+url,{
     method:'GET',//请求的方法名
     //res是一个响应对象，调用json方法可获取JSON格式的响应体
  }).then(res => { return res.json() });
}
//向服务器发送post请求
export function post(url,data){
  return fetch(HOST+url,{
    method:'POST',
    headers:{
      "Accept":'application/json',//用来指定客户端能够接收的响应体类型
      "Content-Type":"application/json"//内容类型
    },
     body:JSON.stringify(data)
  }).then(res=>res.json());
}
//向服务器发送PU请求
export function put(url,data){
  return fetch(HOST+url,{
    method:'PUT',
    headers:{
      "Accept":'application/json',//用来指定客户端能够接收的响应体类型
      "Content-Type":"application/json"//内容类型
    },
     body:JSON.stringify(data)
  }).then(res=>res.json());
}
//向服务器发送PU请求
export function del(url){
  return fetch(HOST+url,{
    method:'DELETE',
    headers:{
      "Accept":'application/json',//用来指定客户端能够接收的响应体类型
    }
  }).then(res=>res.json());
}