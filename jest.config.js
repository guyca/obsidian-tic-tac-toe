/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
};

module.exports = config;
