const { defineConfig } = require('@vue/cli-service');
const Dotenv = require('dotenv-webpack');

const envPath = function () {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? './.env'
    : `./.env.${process.env.NODE_ENV}`;
};

const dotenvArgs = {
  expand: true,
  path: envPath(),
};

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  configureWebpack: {
    plugins: [new Dotenv(dotenvArgs)],
  },
});
