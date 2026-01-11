/**
 * Prettier Configuration
 * Code formatting rules
 */

module.exports = {
  // Basic
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  
  // Spacing
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  
  // JSX
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  
  // Files
  endOfLine: 'lf',
  
  // Overrides
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
  ],
}
