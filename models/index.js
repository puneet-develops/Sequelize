const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('employeedb', 'postgres', 'Rkrajput@123', {
    host: 'localhost',
    logging:false,
    dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  const db={};
  db.sequelize=sequelize;
  db.Sequelize=Sequelize;

  db.user=require('./user')(sequelize,DataTypes,Model);
  db.contact=require('./contact')(sequelize,DataTypes);
  db.sequelize.sync({force:false});
  module.exports=db;