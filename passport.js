var db = require("./db");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({passReqToCallback: true}, authenticate));
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register));

function authenticate(req, username, password, done) {
	db("users")
		.where("username", username)
		.first()
		.then(function(user) {
			if(!user || user.password !== password) {
				return done(null, false, req.flash('invalid', 'Invalid login credentials.'));
			}
			done(null, user);
		}, done);
}

function register(req, username, password, done) {
	db("users")
		.where("username", username)
		.first()
		.then(function(user) {
			if(user) {
				return done(null, false, req.flash('userExists', 'That username already exists.'));
			}
			if(password !== req.body.password2) {
				return done(null, false, req.flash('passwords', "Passwords don't match."));
			}
			if(!req.body.name) {
				return done(null, false, req.flash('noName', "Please provide your name."));
			}

			var newUser = {
				username: username,
				password: password,
				name: req.body.name
			};

			db("users")
				.insert(newUser)
				.then(function(ids) {
					newUser.id = ids[0];
					done(null, newUser);
				});
		}, done);
}

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	db("users")
	.where("id", id)
	.first()
	.then(function(user) {
		done(null, user);
	}, done);
});