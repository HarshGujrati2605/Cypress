const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: ".cypress/reports/cucumber-json",
  reportPath: "./cypress/reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "1",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Automation e2e project" },
      { label: "Release", value: "1.2.3" },
      { label: "Execution Start Time", value: "May 25th 2023, 02:31 PM IST" },
      { label: "Execution End Time", value: "May 25th 2023, 02:56 PM IST" },
    ],
  },
});