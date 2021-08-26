"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {
  constructor({
    config,
    router
  }) {
    this._config = config;
    this._express = (0, _express.default)();

    this._express.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const {
          port
        } = http.address();
        console.log("Application running on port " + port);
        resolve();
      });
    });
  }

}

exports.Server = Server;