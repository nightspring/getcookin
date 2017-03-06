
exports.up = function(knex, Promise) {
  return knex.raw(`
		CREATE TABLE users (
  	id int(11) unsigned NOT NULL AUTO_INCREMENT,
  	username varchar(20) DEFAULT NULL,
  	password varchar(20) DEFAULT NULL,
  	name varchar(20) DEFAULT NULL,
  	PRIMARY KEY (id)
	) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
  	`);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
