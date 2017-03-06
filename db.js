var knex = require("knex");

var config = require("./knexfile")[process.env.NODE_ENV || "development"];

var db = knex(config);

module.exports = db;