import * as Sequelize from 'sequelize';

export default (sequelize) => {
  const Character = sequelize.define(
    'Character',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      house: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    },
    {}
  );
  return Character;
};
