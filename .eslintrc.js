module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-new": "off"
  },
};
