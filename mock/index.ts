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
      passed: Math.round(Math.random()),
      status: Math.round(Math.random()*2)
    }
    projectList.push(projectInfo)
  }
  return projectList
}

const login = function (options) {
  const { phoneNumber, password } = JSON.parse(options.body)
  console.log(phoneNumber,password)
  if (phoneNumber === '1111' && password === '1111') {
    return {
      "code": 10011 ,//&& 20011,
      "message": "Signin success.",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
     }
  } else {
    return {
      "code": 20011,
      "message": "用户账号或者密码错误，请重试"
    }
  }
}

const accounts = function (options) {
  const { accountId } = JSON.parse(options.body)
  if (accountId === 1) {
    return   {
      "accountId": 1,
      "phoneNumber": "18867100483",
      "name": "周侃",
      "character": 3,
    }
  } else {
    return {
      "code": 20011,
      "message": "用户账号或者密码错误"
    }
  }
}

const register = (options) => {
  return {
    "code": 10011 ,//&& 20011,
    "message": "Signin success.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
   }
}



const registration = (options) => {
  return {
    "code": 10011 ,//&& 20011,
    "message": "Signin success.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
   }
}

const getRegistrationData = (options) => {
  console.log('in getRegistrationData',options)
  const { accountId } = JSON.parse(options.body)
  if(accountId === '1111'){
    return {
      "name": "琼琼子",
      "gender": "女",
      "nation": "汉族",
      "certificateType": "中华人民共和国居民身份证",
      "certificateId": "20210314"
     }
  }
  else {
    return {
      "code": 302
    }
  }

}

Mock.mock('/getRegistrationData', 'get', (options) => {
  return getRegistrationData(options)
})

Mock.mock('/registration', 'get', (options) => {
  return registration(options)
})

Mock.mock('/register', 'get', (options) => {
  return register(options)
})

Mock.mock('/login', 'get', (options) => {
  return login(options)
})

Mock.mock('/formslist', 'get',(options) => {
  return getFormsList(options)
})

Mock.mock('/projectlist', 'get',(options) => {
  return getProjectList(options)
})

Mock.mock('/accounts', 'get', (options) => {
  return accounts(options)
})
