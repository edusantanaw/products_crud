export default {
    clearMocks: true,
     collectCoverage: true,
     transform: {
       '.+\\.ts$': 'ts-jest'
     },
     collectCoverageFrom: [
       './src/**/*.ts',
       '!./src/main/**'
     ],
     coverageDirectory: "coverage",
     coveragePathIgnorePatterns: [
       "\\\\node_modules\\\\"
     ],
     coverageProvider: "v8",
     testEnvironment: "jest-environment-node",
     testMatch: [
       "**/__tests__/**/*.[jt]s?(x)",
       "**/?(*.)+(spec|test).[tj]s?(x)"
     ],
   };