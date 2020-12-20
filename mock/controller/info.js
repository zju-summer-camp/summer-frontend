const data = [
  {
    project_name: '化工学院2021年优秀大学生暑期夏令营活动通知',
    deadline: '2021-05-06',
    academy: 'it',
    year: 2021,
    type: 1,
  },
]

module.exports = [
  {
    url: '/info/projects',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
