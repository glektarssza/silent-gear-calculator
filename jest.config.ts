//-- NodeJS
import path from 'node:path';

//-- NPM Packages
import {pathsToModuleNameMapper} from 'ts-jest';
import type {JestConfigWithTsJest} from 'ts-jest';

//-- Project Code
import {compilerOptions} from './tests/tsconfig.json';

/**
 * The Jest configuration.
 */
const config: JestConfigWithTsJest = {
    rootDir: path.resolve(__dirname),
    coverageDirectory: path.resolve(__dirname, './coverage/'),
    coverageProvider: 'v8',
    coverageReporters: ['html', 'text', 'lcov'],
    coveragePathIgnorePatterns: ['**/tests/**', '**/coverage/**'],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths) ?? {},
    maxConcurrency: 5,
    maxWorkers: '50%',
    passWithNoTests: true,
    preset: 'ts-jest',
    prettierPath: null,
    reporters: ['default'],
    resetMocks: true,
    showSeed: true,
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {},
    testMatch: ['**/tests/**/*.spec.{ts,tsx}'],
    workerThreads: true
};

export default config;
