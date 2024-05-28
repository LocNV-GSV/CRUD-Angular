module.exports = {
    preset: "jest-preset-angular",
    // setupFilesAfterEnv: ["<rootDir>/setup.jest.ts"],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!@angular|@ux-aspects|d3|internmap|delaunator|robust-predicates)'],
    testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/src/**/*.mjs'],
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
    testEnvironment: 'jsdom',
    globalSetup: 'jest-preset-angular/global-setup',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/app/**/*.ts',
        '!**/index.ts',
        '!**/*.mock.ts',
        '!**/*.module.ts',
        '!**/routes.ts',
        '!**/*.routes.ts'
    ],
}