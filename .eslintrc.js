module.exports = {
  root: true, // 根据 vue-cli4.0 加入
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'eslint:recommended', // 初始化时的配置，为了 <script setup> 注释
    // 'plugin:vue/essential' // 初始化时的配置，更换成下面新的
    'plugin:vue/vue3-essential',
    '@vue/standard' // 根据 vue-cli4.0 加入（不能双引号）
  ],
  parserOptions: {
    // ecmaVersion: 12, // 初始化时的配置，更换成下面新的
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint' // 根据 vue-cli4.0 加入
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 根据 vue-cli4.0 加入
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off' // 根据 vue-cli4.0 加入
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', 'src']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  }
}
