const { mock } = require('mockjs')
const { handleRandomImage } = require('../utils')
const List = []
const count = 50
for (let i = 0; i < count; i++) {
  List.push(
    mock({
      uuid: '@uuid',
      id: '@id',
      title: '@title(1, 2)',
      description: '@csentence',
      img: handleRandomImage(228, 228),
    })
  )
}

module.exports = [
  {
    url: '/article/getArticleList',
    type: 'get',
    response(config) {
      const { title, current = 1, pageSize = 10 } = config.query
      let mockList = List.filter((item) => {
        return !(title && item.title.indexOf(title) < 0)
      })
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * current && index >= pageSize * (current - 1)
      )
      return {
        code: 200,
        msg: 'success',
        total: mockList.length,
        data: pageList,
      }
    },
  },
]
