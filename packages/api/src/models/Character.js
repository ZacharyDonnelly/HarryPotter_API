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
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {}
  );
  Character.associate = (models) => {
    Character.belongsTo(models.House);
  };
  return Character;
};
