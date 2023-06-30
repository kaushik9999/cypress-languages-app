import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "^@Components/(.+)$": "<rootDir>/src/components/$1",
    "^@Pages/(.+)$": "<rootDir>/src/components/$1"
  },
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)