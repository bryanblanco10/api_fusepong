"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentEnv = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _development = _interopRequireDefault(require("./development"));

var _production = _interopRequireDefault(require("./production"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const {
  NODE_ENV
} = process.env;
const currentEnv = _development.default;
exports.currentEnv = currentEnv;
if (NODE_ENV == "PRODUCTION") currentEnv == _production.default;