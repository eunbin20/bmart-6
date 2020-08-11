// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const passportJWT = require('passport-jwt');

// const JWTStrategy = passportJWT.Strategy;
// const { ExtractJwt } = passportJWT;
// const { verifyPassword } = require('../utils/salt');

// module.exports = () => {
//   passport.use(
//     new LocalStrategy(
//       {
//         usernameField: 'email',
//         passwordField: 'password',
//       },
//       async (loginId, password, done) => {
//         const connection = await pool.getConnection();
//         try {
//           const user = await User.getUserByLoginId(connection, loginId);
//           if (!user) {
//             return done(null, false, { message: 'Not Found User' }); // 3번째 인자는 사용자(?)에러 -> 없는 유저, 비번 틀리거나 등
//           }
//           if (await verifyPassword(password, user.password, user.salt)) {
//             connection.release();
//             return done(null, user); // 로그인 성공!
//           }
//           connection.release();
//           return done(null, false, { message: 'invalid password' }); // 비번 틀림
//         } catch (e) {
//           connection.release();
//           return done(e); // done 의 첫번째 인자는 디비에러 같은 서버에러 지정해줌.
//         }
//       },
//     ),
//   );

//   // jwt strategy
//   passport.use(
//     new JWTStrategy(
//       {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: process.env.JWT_SECRET,
//       },
//       async (payload, done) => {
//         console.log('JWT Strategy Success');
//         const connection = await pool.getConnection();
//         try {
//           const user = await User.getUserById(connection, payload.userId);
//           if (!user) {
//             connection.release();
//             return done(null, false, { message: 'invaliad token' });
//           }
//           connection.release();
//           return done(null, user);
//         } catch (e) {
//           connection.release();
//           return done(e);
//         }
//       },
//     ),
//   );
// };
