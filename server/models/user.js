'use strict';
const { hashPass } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { msg: 'Wrong email format' },
          notEmpty: { msg: 'Email is required' },
          notNull: { msg: 'Email is required' },
          isUnique(val) {
            return User.findOne({ where: { email: val } }).then((result) => {
              if (result) {
                throw { code: 400, msg: 'Email already used' };
              }
            });
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Email is required' },
          notNull: { msg: 'Email is required' },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance) {
          const hash = hashPass(instance.password);
          instance.password = hash;
        },
      },
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
