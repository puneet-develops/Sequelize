module.exports=(sequelize,DataTypes,) =>  {

const contact = sequelize.define('contacts', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  phone: {
    type: DataTypes.BIGINT
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  timestamps:false
});

return contact;
}