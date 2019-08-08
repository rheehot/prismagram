import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import passport from "passport";
import JWTstrategy from "passport-jwt";

const jwtOptions = {
  jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secret: process.env.JWT_SECRET
};

const verifyUser = (payload, done) => {
  try {
  } catch {}
};

passport.use(new JWTstrategy(jwtOptions, verifyUser));
