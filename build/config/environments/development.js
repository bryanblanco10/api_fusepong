"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  API_KEY: process.env.API_KEY,
  DB: {
    username: "root",
    password: "",
    database: "pt_fusepong",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  }
};
exports.default = _default;