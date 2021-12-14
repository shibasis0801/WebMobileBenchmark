if (process.env.APP === "true") {
  const appConfig = require("./android/webpack.config");
  module.exports = appConfig;
}
else {
  const webConfig = require("./web/webpack.config");
  module.exports = webConfig;
}
