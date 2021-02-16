import * as Mock from 'mockjs'
const Random = Mock.Random

// 获取项目列表
const getProjectList = function (options) {
  const { page, pagination} = JSON.parse(options.body)
  const projectList = []
  for (let i = 0; i < pagination; i++) {
    const projectInfo = {
      id: Random.id(),
      name: Random.ctitle(15, 30), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      tutorTeam: Random.cname(),
      academy: '计算机科学与技术学院',
      overview: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      deadline: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    projectList.push(projectInfo)
  }
  return projectList
}

// 获取报名表列表
const getFormsList = function (options) {
  const { page, pagination} = JSON.parse(options.body)
  const projectList = []
  for (let i = 0; i < pagination; i++) {
    const projectInfo = {
      id: Random.id(),
      name: Random.cname(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      intentionalCollegeName:  '计算机科学与技术学院',
      intentionalMajorName: Random.ctitle(15, 30),
      undergraduateSchool: Random.ctitle(15, 30),
      department:Random.ctitle(15, 30),
      major:Random.ctitle(15, 30),
      enrollmentTime: Random.date(),
      passed: Math.round(Math.random())
    }
    projectList.push(projectInfo)
  }
  return projectList
}



Mock.mock('/formslist', 'get',(options) => {
  return getFormsList(options)
})

Mock.mock('/projectlist', 'get',(options) => {
  return getProjectList(options)
})
