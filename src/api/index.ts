export const Apis = {
    signin: 'http://47.110.71.157:2334/v1/signin', // 登录
    signup: 'http://47.110.71.157:2334/v1/signup', // 注册
    queryappform: 'http://47.110.71.157:2334/v1/accounts/appform', // 查询报名表
    submitappform: 'http://47.110.71.157:2334/v1/accounts/appform',
    accountstatus: 'http://47.110.71.157:2334/v1/accounts/status', //获取账户信息
    createproject: 'http://47.110.71.157:2334/v1/projects', // 创建新项目
    searchproject: 'http://47.110.71.157:2334/v1/projects/search', // 获取项目列表 
    publishment: 'http://47.110.71.157:2334/v1/projects/publishment', // 修改项目的公开属性，即修改发布状态（已发布/未发布)
}