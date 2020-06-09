module.exports = {
  extends: ['alloy', 'alloy/typescript', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true
  },
  globals: {},
  rules: {
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],
    'prettier/prettier': 'error'
  }
};
