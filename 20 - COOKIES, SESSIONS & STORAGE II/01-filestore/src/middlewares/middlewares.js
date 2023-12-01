export const validateLogIn = (req, res, next) => {
  console.log(req.session);
  if (req.session.info && req.session.info.loggedIn) next();
  else res.status(401).json({ msg: "no estas autorizado" });
};
