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
      require("karma-coverage-istanbul-reporter"),
    ],
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: false,
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100,
        },
      },
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
