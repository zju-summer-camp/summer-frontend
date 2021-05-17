declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'lodash'

interface Vue {
  [propName: string]: any;
}


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

interface Window {
  [propName: string]: any;
}

interface HTMLElement {
  [propName: string]: any;
}