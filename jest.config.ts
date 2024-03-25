import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageProvider: "v8",
    coverageReporters: ["json", "lcov", "html", "text"],
};

export default config;