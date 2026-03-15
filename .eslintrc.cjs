module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Vue 3 強烈建議規則
    'prettier', // 必須放在最後，用來覆蓋與 Prettier 衝突的規則
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 3 },
        multiline: { max: 1 },
      },
    ],
  },
}
