// 报名表
// 基本信息：
// 姓名       证件类型       证件号码       出生日期       民族       性别       政治面貌

// 联系方式：
// 通讯地址       家庭地址       邮编       电话       邮箱

// 申请意向：
// 意向学院代码       意向学院名称       意向专业代码       意向专业名称       意向攻读类别   意向导师姓名

// 教育信息：
// 本科学校       学校类型   本科院系       本科专业       入学时间       预计毕业时间
// 排名情况：
// 同年级人数   预计专业排名       前五学期排名       学生备注       外语类型       外语成绩
// 个人陈述：
//  研究方向       个人陈述  论文情况

// export const options = {
//   name: {
//     label: '姓名',
//     hint: '请填写姓名',
//   },
//   gender: {
//     label: '性别',
//     hint: '请填写性别',
//   },
//   nation: {
//     label: '民族',
//   },
//   certificateType: {
//     label: '身份证件类型',
//   },
//   certificateId: {
//     label: '证件号码',
//   },
//   birthday: {
//     label: '出生日期',
//   },
//   policalStatus: {
//     label: '政治面貌',
//   },
//   correspondenceAddress: {
//     label: '通讯地址',
//   },
//   homeAddress: {
//     label: '家庭地址',
//   },
//   postalCode: {
//     label: '邮政编码',
//   },
//   telephoneNumber: {
//     label: '电话号码',
//   },
//   email: {
//     label: '邮箱',
//   },
//   intentionalCollegeCode: {
//     label: '意向学院代码',
//   },
//   intentionalCollegeName: {
//     label: '意向学院名称',
//   },
//   intentionalMajorCode: {
//     label: '意向专业代码',
//   },
//   intentionalMajorName: {
//     label: '意向专业名称',
//   },
//   intentionalStudy_category: {
//     label: '意向攻读类型',
//   },
//   intentional_tutor_name: {
//     label: '意向导师姓名',
//   },
//   undergraduate_school: {
//     label: '本科院校',
//   },
//   school_type: {
//     label: '学校类型',
//   },
//   department: {
//     label: '本科院系',
//   },
//   major: {
//     label: '本科专业',
//   },
//   enrollment_time: {
//     label: '入学时间',
//   },
//   graduation_time: {
//     label: '预计毕业时间',
//   },
//   thesis: {
//     label: '论文情况',
//   },
//   grade_number: {
//     label: '同年级人数',
//   },
//   ranking: {
//     label: '预计专业排名',
//   },
//   five_semester_ranking: {
//     label: '前五学期排名',
//   },
//   remarks: {
//     label: '学生备注',
//   },
//   foreign_language_type: {
//     label: '外语类型',
//   },
//   foreign_language_grades: {
//     label: '外语成绩',
//   },
//   research_direction: {
//     label: '研究方向',
//   },
//   personal_statement: {
//     label: '个人陈述',
//   },
// }

export const nation = [
  { id: '01', name: '汉族' },
  { id: '02', name: '蒙古族' },
  { id: '03', name: '回族' },
  { id: '04', name: '藏族' },
  { id: '05', name: '维吾尔族' },
  { id: '06', name: '苗族' },
  { id: '07', name: '彝族' },
  { id: '08', name: '壮族' },
  { id: '09', name: '布依族' },
  { id: '10', name: '朝鲜族' },
  { id: '11', name: '满族' },
  { id: '12', name: '侗族' },
  { id: '13', name: '瑶族' },
  { id: '14', name: '白族' },
  { id: '15', name: '土家族' },
  { id: '16', name: '哈尼族' },
  { id: '17', name: '哈萨克族' },
  { id: '18', name: '傣族' },
  { id: '19', name: '黎族' },
  { id: '20', name: '傈僳族' },
  { id: '21', name: '佤族' },
  { id: '22', name: '畲族' },
  { id: '23', name: '高山族' },
  { id: '24', name: '拉祜族' },
  { id: '25', name: '水族' },
  { id: '26', name: '东乡族' },
  { id: '27', name: '纳西族' },
  { id: '28', name: '景颇族' },
  { id: '29', name: '柯尔克孜族' },
  { id: '30', name: '土族' },
  { id: '31', name: '达斡尔族' },
  { id: '32', name: '仫佬族' },
  { id: '33', name: '羌族' },
  { id: '34', name: '布朗族' },
  { id: '35', name: '撒拉族' },
  { id: '36', name: '毛难族' },
  { id: '37', name: '仡佬族' },
  { id: '38', name: '锡伯族' },
  { id: '39', name: '阿昌族' },
  { id: '40', name: '普米族' },
  { id: '41', name: '塔吉克族' },
  { id: '42', name: '怒族' },
  { id: '43', name: '乌孜别克族' },
  { id: '44', name: '俄罗斯族' },
  { id: '45', name: '鄂温克族' },
  { id: '46', name: '崩龙族' },
  { id: '47', name: '保安族' },
  { id: '48', name: '裕固族' },
  { id: '49', name: '京族' },
  { id: '50', name: '塔塔尔族' },
  { id: '51', name: '独龙族' },
  { id: '52', name: '鄂伦春族' },
  { id: '53', name: '赫哲族' },
  { id: '54', name: '门巴族' },
  { id: '55', name: '珞巴族' },
  { id: '56', name: '基诺族' },
]

export const certificateType = [
  {
    id: '1',
    name: '中华人民共和国居民身份证',
  },
  {
    id: '2',
    name: '军人证件',
  },
  {
    id: '3',
    name: '港澳台身份证件',
  },
  {
    id: '4',
    name: '华侨身份证',
  },
  {
    id: '5',
    name: '外籍护照',
  },
]

export const policalStatus = [
  {
    id: '1',
    name: '中共党员',
  },
  {
    id: '2',
    name: '中共预备党员',
  },
  {
    id: '3',
    name: '共青团员',
  },
  {
    id: '4',
    name: '民革会员',
  },
  {
    id: '5',
    name: '民盟盟员',
  },
  {
    id: '6',
    name: '民建会员',
  },
  {
    id: '7',
    name: '民进会员',
  },
  {
    id: '8',
    name: '农工党党员',
  },
  {
    id: '9',
    name: '致公党党员',
  },
  {
    id: '10',
    name: '九三学社社员',
  },
  {
    id: '11',
    name: '台盟盟员',
  },
  {
    id: '12',
    name: '无党派民主人士',
  },
  {
    id: '13',
    name: '群众',
  },
]
