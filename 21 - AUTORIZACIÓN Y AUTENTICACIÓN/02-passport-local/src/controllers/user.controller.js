import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

export const registerResponse = (req, res, next) => {
  try {
    res.json({
      msg: "register ok",
      session: req.session,
    });
  } catch (error) {
    next(error.message);
  }
};

export const loginResponse = async (req, res, next) => {
  try {
    const id = req.session.passport.user;
    const user = await userDao.getById(id);
    const { first_name, last_name } = user;
    res.json({
      msg: "login ok",
      user: { first_name, last_name },
    });
  } catch (error) {
    next(error.message);
  }
};
