import antfu from '@antfu/eslint-config'
import command from 'eslint-plugin-command/config'

export default antfu(
  {
    // Global antfu config options
    stylistic: {
      jsx: true,
      overrides: {
        'node/prefer-global/process': 'off',
        // 2-space indentation
        'style/indent': ['error', 2, { SwitchCase: 1 }],
        // semicolons at the end of lines
        'style/semi': ['error', 'never'],
        // spacing inside object literals
        'style/object-curly-spacing': ['error', 'always'],
        // spacing around commas
        'style/comma-spacing': ['error', { before: false, after: true }],
        // consistent line breaks inside braces
        'style/object-curly-newline': ['error', { consistent: true }],
        // consistent linebreak style
        'style/linebreak-style': ['error', 'unix'],
        // consistent spacing inside parentheses
        'style/space-in-parens': ['error', 'never'],
        // [ ] spaces
        'style/array-bracket-spacing': ['error', 'never'],
        'style/array-bracket-newline': ['error', 'consistent'],

        // single quotes for strings
        'style/quotes': ['error', 'single', { avoidEscape: true }],
        'style/space-before-function-paren': ['error', 'always'],
        // consistent spacing before and after keywords
        'style/keyword-spacing': ['error', { before: true, after: true }],
        // consistent use of trailing commas
        'style/comma-dangle': ['error', 'only-multiline'],

        'style/max-statements-per-line': ['off'],
      }
    },
    lessOpinionated: true,
    typescript: true, // Auto-detected, but can be made explicit
    vue: false, // Explicitly disable if not a Vue project
    react: false, // Explicitly disable if not a React project
    jsonc: true, // Enable linting for JSON, JSONC, JSON5 files
    yaml: true, // Enable linting for YAML files
    markdown: true, // Enable linting for Markdown files (e.g., code blocks)
  },
  // Additional flat config objects for project-specific rules or overrides
  {
    rules: {
      // Example: Disallow console.log in production builds (conceptual, actual implementation may vary)
      // 'no-console': process.env.NODE_ENV === 'production'? 'warn' : 'off',
      'complexity': ['off', { max: 15 }], // Adjust complexity threshold as needed
      'max-depth': ['off', 4], // Limit block nesting depth
      'max-lines-per-function': ['off', { skipBlankLines: true, max: 100 }],
      'no-case-declarations': 'off',
      'unicorn/prevent-abbreviations': ['off'],
      'antfu/no-top-level-await': 'off',
      'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      'no-unused-vars': ['off'],
      'ts/no-unused-vars': ['off'],
      'unused-imports/no-unused-vars': ['off'],
    },
  },
  {
    // Configuration for test files (if using a testing framework)
    files: ['tests/**/*.js', 'tests/**/*.ts', 'test/**/*.js', 'test/**/*.ts'],
    rules: {
      // Relax certain rules for tests if necessary
      'no-unused-expressions': 'off',
      'max-lines-per-function': 'off', // Tests can sometimes be longer
    },
  },
  {
    ignores: [
      '.assetpack'
    ]
  },
  command(),
)
