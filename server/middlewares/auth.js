const passport = require('passport');

exports.isAuthenticated = passport.authenticate('local', { session: false });

exports.isValidJwtToken = passport.authenticate('jwt', { session: false });
