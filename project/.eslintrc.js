module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "unused-imports"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "no-console": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    semi: [2, "never"],
    indent: "off",
    "no-tabs": "off",
    "no-mixed-spaces-and-tabs": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        tabWidth: 2,
      },
    ],
  },
}
