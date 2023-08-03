module.exports = function (wallaby) {
  return {
    autoDetect: true,
    files: ['src/**/*.ts'],

    tests: ['tests/**/*test.ts?(x)'],
  };
};
