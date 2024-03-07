//-- NodeJS
import path from 'node:path';

//-- NPM Packages
import {JestConfigWithTsJest} from 'ts-jest';

/**
 * The Jest configuration.
 */
const config: JestConfigWithTsJest = {
    rootDir: path.resolve(__dirname),
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    testMatch: ['<rootDir>/tests/**/*.spec.ts'],
    coverageDirectory: '<rootDir>/coverage',
    coverageProvider: 'v8',
    coverageReporters: ['html', 'lcov', 'text'],
    resetMocks: true,
    showSeed: true,
    cacheDirectory: '<rootDir>/.cache',
    cache: true,
    prettierPath: null,
    passWithNoTests: true,
    reporters: ['default']
};

export default config;
