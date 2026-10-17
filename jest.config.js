let tsJestPath = 'ts-jest';
try {
    tsJestPath = require.resolve('ts-jest');
} catch (e) {
    try {
        const globalRoot = require('child_process').execSync('npm root -g', { encoding: 'utf8' }).trim();
        tsJestPath = require('path').join(globalRoot, 'ts-jest');
    } catch (e2) {}
}

module.exports = {
    "testEnvironment": "node",
    "testMatch": [
        "**/test/**/*.test.ts",
        "**/test/**/*.test.js"
    ],
    "verbose": true,
    "transform": {
        "^.+\\.ts$": [
            tsJestPath,
            {
                "tsconfig": "<rootDir>/tsconfig.json"
            }
        ]
    }
};
