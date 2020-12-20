import request from '@/utils/request'

export function getProjectsInfo(params) {
  return request({
    url: '/info/projects',
    methods: 'get',
    params,
  })
}
