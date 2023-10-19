module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "@tokilabs/eslint-config",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "@typescript-eslint"
  ],
};
