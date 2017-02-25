var db = require("./db");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(authenticate));
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register));

function authenticate(username, password, done) {
	db("users")
		.where("username", username)
		.first()
		.then(function(user) {
			if(!user || user.password !== password) {
				return done(null, false, {message: "Invalid login credentials."});
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
				return done(null, false, {message: "That username already exists."});
			}
			if(password !== req.body.password2) {
				return done(null, false, {message: "Passwords don't match."});
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
		});
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