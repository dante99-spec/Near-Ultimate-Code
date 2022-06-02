'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Allcode.hasMany(models.User, {foreignKey: 'positionId', as: 'positionData'})
      Allcode.hasMany(models.User, {foreignKey: 'gender', as: 'genderData'})
      Allcode.hasMany(models.schedule, {foreignKey: 'timeType', as: 'timeTypeData'})

      Allcode.hasMany(models.doctor_infor, {foreignKey: 'priceId', as: 'priceTypeData'})
      Allcode.hasMany(models.doctor_infor, {foreignKey: 'provinceId', as: 'provinceTypeData'})
      Allcode.hasMany(models.doctor_infor, {foreignKey: 'paymentId', as: 'paymentTypeData'})
    }
  };
  Allcode.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'allcodes',
  });
  return Allcode;
};