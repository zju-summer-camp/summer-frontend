const host = 'http://47.110.71.157:2334'

export const Apis = {
    signin: host + '/v1/signin', // 登录
    signup: host + '/v1/signup', // 注册
    queryappform: host + '/v1/accounts/appform', // 查询报名表
    submitappform: host + '/v1/accounts/appform',
    accountstatus: host + '/v1/accounts/status', //获取账户信息
    createproject: host + '/v1/projects', // 创建新项目
    searchproject: host + '/v1/projects/search', // 获取项目列表 
    publishment: host + '/v1/projects/publishment', // 修改项目的公开属性，即修改发布状态（已发布/未发布)
    candidates: host + '/v1/projects/candidates', // 学生点击报名
    queryCandidates: host + '/v1/projects/candidates', // 管理后台，学生报名表管理
}