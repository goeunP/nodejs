if (process.env.NODE_ENV === "production") {
  module.exports = requie("./prod");
} else {
  module.exports = require("./dev");
}
