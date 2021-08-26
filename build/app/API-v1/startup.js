"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartUp = void 0;

class StartUp {
  constructor({
    server
  }) {
    this._server = server;
  }

  async start() {
    await this._server.start();
  }

}

exports.StartUp = StartUp;