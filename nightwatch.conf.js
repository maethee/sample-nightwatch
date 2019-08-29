const SELENIUM_SERVER = (process.env.SELENIUM_SERVER || 'true') === 'true'
const SELENIUM_HOST = process.env.SELENIUM_HOST || 'localhost'
const SELENIUM_PORT = process.env.SELENIUM_PORT || 4444

//const LAUNCH_URL = "https://www.renthub.in.th/login"

const selenium = {
  start_process: SELENIUM_SERVER,
  server_path:
    "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar",
  host: "127.0.0.1",
  port: "4444"
};

module.exports = {
  src_folders: ["samples"],
  selenium: selenium,
  webdriver: {
    start_process: true,
    server_path: "node_modules/.bin/chromedriver",
    port: 9515,
  },
  test_settings: {
    default: {
        selenium_host: SELENIUM_HOST,
        selenium_port: SELENIUM_PORT,
        //launchUrl: LAUNCH_URL,
        screenshots: {
          enabled: true,
          on_failure: true,
          path: 'reports/screenshots'
        },
        globals: {
          waitForConditionTimeout: 30000
        }
    },
  },
};
