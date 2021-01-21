import request from '@/utils/request'
// import { config } from '@vue/test-utils'

export function login(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/login',
    method: 'post',
    // data
    params: data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-admin-template/user/info',
    url: '/user/getUsers',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
