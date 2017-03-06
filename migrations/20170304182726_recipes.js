
exports.up = function(knex, Promise) {
  return knex.raw(`
	CREATE TABLE recipes (
  	id int(11) unsigned NOT NULL AUTO_INCREMENT,
  	user_id int(11) DEFAULT NULL,
  	rec int(11) DEFAULT NULL,
  	note text,
  	PRIMARY KEY (id)
	) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=latin1;
  	`);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
