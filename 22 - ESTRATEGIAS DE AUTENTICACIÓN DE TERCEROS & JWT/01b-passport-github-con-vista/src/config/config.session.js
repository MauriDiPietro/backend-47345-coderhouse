import mongoStore from "connect-mongo";

export const configSession = {
  secret: "sessionKey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 10000,
  },
  store: new mongoStore({
    mongoUrl:
      "mongodb://127.0.0.1:27017/coder47345",
    //autoRemove: "interval",
    ttl: 10,
    // crypto: {
    //   secret: '1234',       //encripta los datos de la sesion
    // },
  }),
};
