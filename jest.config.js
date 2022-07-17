module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testEnvironmentOptions: {
        url: "http://localhost/" // this is not removing the warning for some reason
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
        },
    },
    moduleNameMapper: {
        "^@auth/(.*)$": "<rootDir>/src/app/core/auth/$1",
        "^@core/(.*)$": ["<rootDir>/src/app/core/$1"],
        "^@features/(.*)$": "<rootDir>/src/app/features/$1",
        "^@interfaces": ["<rootDir>/src/app/app.interfaces"],
        "^@store/(.*)$": ["<rootDir>/src/app/store/$1"],
        "^content/(.*)$": ["<rootDir>/src/content/$1"]
    }
};
