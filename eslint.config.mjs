import antfu from '@antfu/eslint-config'
import command from 'eslint-plugin-command/config'
// import html from '@html-eslint/eslint-plugin'

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
  // TODO: enable
  // HTML specific config:
  // {
  //   name: 'project:html-linting', // Optional: for easier debugging with --inspect-config
  //   files: ['**/*.html', 'src/**/*.html'], // Target HTML files
  //   plugins: {
  //     html, // Register the plugin
  //   },
  //   language: 'html/html', // Specify the language for ESLint [10]
  //   rules: {
  //     ...html.configs['flat/recommended'].rules,
  //     // Style Rules
  //     'html/indent': ['error', 2], // Enforce 2-space indentation [11]
  //     'html/quotes': ['error', 'double'], // Enforce double quotes for attributes for consistency [11]
  //     'html/no-trailing-spaces': 'error', // Disallow trailing whitespace [11]
  //     'html/element-newline': 'warn', // Encourage newlines between elements for readability [11]
  //     'html/attrs-newline': ['warn', { maxAttrs: 3 }], // Newlines for attributes if many, for readability [11]
  //     'html/no-extra-spacing-attrs': 'error', // Disallow extra spaces around attributes [11]
  //     'html/lowercase': 'error', // Enforce lowercase tag and attribute names [11]

  //     // Best Practices
  //     'html/require-closing-tags': ['error', { selfClosing: 'always' }], // Enforce proper closing tags [11]
  //     'html/no-obsolete-tags': 'error', // Disallow obsolete HTML5 elements [11]
  //     'html/no-duplicate-attrs': 'error', // Prevent duplicate attributes [11]
  //     'html/no-duplicate-id': 'error', // Prevent duplicate IDs [11]
  //     'html/no-inline-styles': 'warn', // Discourage inline styles for better CSS management [11]
  //     'html/require-doctype': 'error', // Ensure DOCTYPE is present [11]

  //     // Accessibility (Crucial for UI elements in games)
  //     'html/require-img-alt': 'error', // Require alt text for images [11]
  //     'html/require-input-label': 'error', // Require labels for form inputs [11]
  //     'html/no-positive-tabindex': 'error', // Disallow positive tabindex values [11]
  //     'html/no-accesskey-attrs': 'warn', // Discourage accesskey due to potential conflicts [11]
  //     'html/require-frame-title': 'error', // Require titles for iframes [11]

  //     // SEO (Less critical for internal game UI, but good for web-facing pages if any)
  //     'html/require-title': 'warn', // Require a <title> tag [11]
  //     'html/require-lang': 'warn', // Require lang attribute on <html> [11]
  //   },
  // },
)
