module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 'off',
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "vue/no-unused-vars": "off"
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
