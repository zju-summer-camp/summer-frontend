declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'lodash'


interface ItemConf {
  hint?: string;
  label: string;
  required?: boolean;
  value: any;
  rules?: any;
  [propName: string]: any;
}


interface FormConf {
  [propName: string]: any;
}

interface RegiFormData {
  [propName: string]: any;
}

interface Items {
  [propName: string]: ItemConf
}