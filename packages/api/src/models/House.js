import * as Sequelize from 'sequelize';

export default (sequelize) => {
  const House = sequelize.define(
    'House',
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
    },
    {}
  );
  House.associate = (models) => {
    House.hasMany(models.Character);
  };
  return House;
};
