module.exports = {
  root: true,
  env: { 
    browser: true,
     es2020: true,
     node: true,
 },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',

  ],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
   },
  settings: { 
    react: { 
      version: '18.2'
   },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  plugins: ['react-refresh'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-promise-executor-return': 'off',
    'no-restricted-imports': ['error', { patterns: ['@features/*/*'] }],
    'no-bitwise': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unu  sed-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
}
}
