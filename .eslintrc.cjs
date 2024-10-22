/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //无分号
        printWideth: 80, //每行宽度至多80字符
        trailingComma: 'none', //不加对象|数组最后的逗号
        endOfLine: 'auto' //换行符号不限制
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] //vue组件名称多单词组成
      }
    ],
    'vue/no-setup-props-destructure': ['off'], //关闭props解构的校验
    'no-undef': 'error'
  }
}
