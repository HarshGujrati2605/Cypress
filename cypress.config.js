const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

// const createEsbuildPlugin =
//   require('@badeball/cypress-cucumber-preprocessor');
const {addCucumberPreprocessorPlugin} =  require('@badeball/cypress-cucumber-preprocessor');

  const {    preprocessor,  } = require("@badeball/cypress-cucumber-preprocessor/browserify");
  

//  const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
// const nodePolyfills =
//   require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin



async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({

  env: {
    url: "https://rahulshettyacademy.com/angularpractice/shop"

  },
  e2e: {
    setupNodeEvents(on, config) {

   
      // implement node event listeners here
    },
    retries: {
      runMode: 1

    },
    projectId: "ciqw45",
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    defaultCommandTimeout: 20000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    setupNodeEvents
  },
});
