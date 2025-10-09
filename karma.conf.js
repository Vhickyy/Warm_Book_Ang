// module.exports = function (config) {
//   config.set({
//     frameworks: ["jasmine", "@angular-devkit/build-angular"],
//     browsers: ["ChromeHeadless"],
//     reporters: ["progress", "kjhtml", "coverage"], // Added "coverage" here
//     coverageReporter: {
//       dir: require("path").join(__dirname, "./coverage"),
//       subdir: ".",
//       reporters: [
//         { type: "html" },
//         { type: "text-summary" },
//         { type: "lcovonly" },
//       ],
//       check: {
//         global: {
//           statements: 100,
//           branches: 100,
//           functions: 100,
//           lines: 100,
//         },
//       },
//     },
//   });
// };

// Karma configuration file
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
    ],
    client: {
      jasmine: {
        // Jasmine configuration
      },
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      subdir: ".",
      reporters: [
        { type: "html" },
        { type: "text-summary" },
        { type: "lcovonly" },
      ],
      // Enforce 100% coverage - CI will fail if below these thresholds
      check: {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
        },
      },
    },
    reporters: ["progress", "kjhtml", "coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
