const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const User = require("../models/user");
const { verifyPassword } = require("../utils/salt");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const result = await User.findOne({ where: { email } });
          if (!result) {
            return done(null, false, { message: "Not Found User" });
          }
          const { dataValues: user } = result;
          if (await verifyPassword(password, user.password, user.salt)) {
            return done(null, user); // 로그인 성공!
          }
          return done(null, false, { message: "invalid password" }); // 비번 틀림
        } catch (e) {
          return done(e);
        }
      }
    )
  );

  // jwt strategy
  // passport.use(
  //   new JWTStrategy(
  //     {
  //       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //       secretOrKey: process.env.JWT_SECRET,
  //     },
  //     async (payload, done) => {
  //       console.log('JWT Strategy Success');
  //       const connection = await pool.getConnection();
  //       try {
  //         const user = await User.getUserById(connection, payload.userId);
  //         if (!user) {
  //           connection.release();
  //           return done(null, false, { message: 'invaliad token' });
  //         }
  //         connection.release();
  //         return done(null, user);
  //       } catch (e) {
  //         connection.release();
  //         return done(e);
  //       }
  //     },
  //   ),
  // );
};
