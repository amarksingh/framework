const tsJestPath = "/Users/amarkumarsingh/.nvm/versions/node/v24.12.0/lib/node_modules/ts-jest";

export default {
    "testEnvironment": "node",
    "testMatch": [
        "**/test/**/*.test.ts",
        "**/test/**/*.test.js"
    ],
    "transform": {
        "^.+\\.ts$": [
            tsJestPath,
            {
                "tsconfig": "<rootDir>/tsconfig.json"
            }
        ]
    },
    "moduleNameMapper": {
        "^@ostro/foundation/(.*)$": "<rootDir>/../foundation/src/$1",
        "^@ostro/foundation$": "<rootDir>/../foundation/src/application",
        "^@ostro/framework/(.*)$": "<rootDir>/src/$1",
        "^@ostro/framework$": "<rootDir>/src/index"
    },
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "coverageReporters": [
        "text",
        "lcov",
        "clover"
    ],
    "collectCoverageFrom": [
        "<rootDir>/src/**/*.ts"
    ]
};
