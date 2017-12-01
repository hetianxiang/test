import HomeView from 'view/home'
import HeaderBar from 'components/HeaderBar' 
import Detail from 'view/detail'
import List from 'view/list'
import Add from 'view/add'

export default [
  {
    exact: false,
    name: 'homeHeader',
    path: '/',
    component: HeaderBar,
  },
  {
    exact: true,
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    exact: false,
    name: 'home',
    path: '/detail/:id',
    component: Detail
  },
  {
    exact: true,
    name: 'home',
    path: '/list',
    component: List
  },
  {
    exact: true,
    name: 'home',
    path: '/add',
    component: Add
  }
]
