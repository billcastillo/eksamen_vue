module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  ignorePatterns: ['presets'],
  rules: {
    'no-console': 'off',
    indent: 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'no-lonely-if': 'off',
    'import/no-unresolved': 'off',
    'import/no-default-export': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'func-call-spacing': 'off',
    'vue/first-attribute-linebreak ': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/first-attribute-linebreak': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
