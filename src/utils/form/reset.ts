    // 清空表单项 value
    export const reset = (items: Items) => {
      for(const key in items){
        items[key].value = ''  // value的初始值都是 string 吗，能否区分不同类型？
          items[key].error = ''
      }
    }