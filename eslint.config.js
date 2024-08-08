module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
      ],
  },
}
