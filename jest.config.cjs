module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for browser-like tests
  preset: 'ts-jest', // Use ts-jest preset for handling TypeScript
  setupFilesAfterEnv: ['./src/test/setup.ts'], // Global setup file for any global test configurations
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { isolatedModules: true }], // Use ts-jest for TypeScript files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Resolve @ to src folder (no change needed)
    '\\.(css|less)$': 'identity-obj-proxy', // Mock CSS/LESS files for testing
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Match test files inside __tests__ folders
    '**/?(*.)+(spec|test).[tj]s?(x)', // Match files with .spec or .test suffix
  ],
};
