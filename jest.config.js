/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ["json-summary", "text"],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*Graph.ts',
    '!dist/**',
  ],
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.yalc/'],
};

module.exports = config;
