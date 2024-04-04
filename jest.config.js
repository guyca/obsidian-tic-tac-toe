/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ["json-summary", "text"],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!dist/**',
  ],
  collectCoverage: true,
};

module.exports = config;
