exports.config = {
  seleniumAddress: 'http://localhost:4444/grid/console',
  allScriptsTimeout: 11000,

  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    'seleniumAddress' : "http://localhost:4444/wd/hub"
  },
  directConnect: true,

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  cucumberOpts: {
    require: ['./e2e/features/**/*.steps.ts'], // loads step definitions
    format: 'json: e2e-output.txt',               // enable console output
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json' //enable typescript
    });
  }
};
