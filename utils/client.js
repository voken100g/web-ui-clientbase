import request from './axios'

export function getMountains() {
  return request({
    url: 'https://api.nuxtjs.dev/mountains',
    method: 'get'
  })
}

export function get404() {
  return request({
    url: '/404',
    method: 'get'
  })
}
