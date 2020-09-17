const { User } = require('../models');
const { createToken } = require('../helpers/jwt');
const { comparePass } = require('../helpers/bcrypt');

class UserController {
  static async register(req, res, next) {
    try {
      const form = {
        email: req.body.email,
        password: req.body.password,
      };
      await User.create(form);
      res.status(201).json({
        success: true,
        code: 201,
        data: {},
        message: 'User Created',
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const form = {
        email: req.body.email,
        password: req.body.password,
      };
      const response = await User.findOne({ where: { email: form.email } });
      if (!response) throw { code: 400, msg: 'Invalid email or password' };

      const compare = comparePass(form.password, response.password);
      if (!compare) throw { code: 400, msg: 'Invalid email or password' };

      const token = createToken({ id: response.id });
      res.status(200).json({
        success: true,
        code: 200,
        data: { token },
        message: 'Login Success',
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
