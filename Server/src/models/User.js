const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      // id: {
      //    type: Serial,
      //    primaryKey: true,
      //    validate: {
      //       allowNull: false,            
      //    }
      // },
      email: {
         type: DataTypes.STRING,  
         allowNull: false,    
         validate: {
           isEmail: true
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
