'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _environments = require("../../config/environments");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const basename = _path.default.basename(__filename);

const config = _environments.currentEnv.DB;
const db = {};
/* let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
} */

exports.db = db;
const sequelize = new _sequelize.default(config.database, config.username, config.password, config);
sequelize.authenticate().then(() => {
  console.log("BD Connected");
}).catch(err => {
  console.log("BD not connected");
});

_fs.default.readdirSync(__dirname).filter(file => {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(file => {
  const model = require(_path.default.join(__dirname, file))(sequelize, _sequelize.default.DataTypes);

  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize.default;