// 校验必填项是否为空
export const requiredValid = (itemConfig: ItemConf) => {
  if(itemConfig && itemConfig.required && !itemConfig.value){
    itemConfig.error = '请输入' + itemConfig.label
    return false
  }
  return true
}


// 传入配置，校验该项数据正确性，若错误，写入配置项的 error 中
export const validKey = (itemConfig: ItemConf, formConfig: FormConf) => {
  let flag = true
  itemConfig && itemConfig.rules && itemConfig.rules.forEach((rule: any)=>{
    if(!rule.ok(itemConfig.value, formConfig)){
      itemConfig.error = rule.msg
      flag = false
    }
  })
  flag = requiredValid(itemConfig) && flag
  return flag
}

