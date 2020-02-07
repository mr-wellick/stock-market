module.exports = {
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: ['**/src/**/*'],
  coverageThreshold: {
    global: {
      statements: 1,
      branches: 1,
      functions: 1,
      lines: 1
    }
  }
};
