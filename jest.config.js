module.exports = {
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: ['**/src/**/*'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
};
