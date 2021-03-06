module.exports = (err, req, res, next) => {
  let code = null;
  let errors = [];
  if (err.code) {
    code = err.code;
    errors.push(err.msg);
  } else if (err.errors) {
    if (err.name == 'SequelizeValidationError') {
      code = 400;
      err.errors.forEach((el) => {
        errors.push(el.message);
      });
    }
  } else if (err.name == 'JsonWebTokenError') {
    code = 401;
    errors.push('You are not authorized');
  } else {
    code = 500;
    errors.push('Internal server error');
  }
  console.log(err, 'Error handler');
  res.status(code).json({
    code: code,
    err: errors,
  });
};
