const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const User = require('../models/user');
const { verifyPassword } = require('../utils/salt');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const result = await User.findOne({ where: { email } });
          if (!result) {
            return done(null, false, '');
          }
          const { dataValues: user } = result;
          if (await verifyPassword(password, user.password, user.salt)) {
            return done(null, user); // 로그인 성공!
          }
          return done(null, false, ''); // 비번 틀림
        } catch (e) {
          return done(e);
        }
      },
    ),
  );

  // jwt strategy
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (payload, done) => {
        try {
          const result = await User.findOne({ where: { id: payload.userId } });
          if (!result) {
            return done(null, false, '');
          }
          const { dataValues: user } = result;
          return done(null, user);
        } catch (e) {
          return done(e);
        }
      },
    ),
  );
};
