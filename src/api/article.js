import request from '@/utils/request'

export function getArticleList(params) {
  return request({
    url: '/article/getArticleList',
    method: 'get',
    params,
  })
}
