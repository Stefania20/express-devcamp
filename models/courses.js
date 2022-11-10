'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {type:DataTypes.STRING,
            allowNull: false,
            validate:{
              isAlpha: {
                args:true,
               msg:"title solo debe tener letras"
              },
              notEmpty:{
                args:true,
               msg:"title no debe estar vacio"
              },
              notNull: {  
                args:true,
               msg:"title no presente"
              },
            }  
    },

    description:{ type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
         msg:"description no debe estar vacio"
        },
        notNull: {  
          args:true,
         msg:"description no presente"
        },
      }        
    },
    weeks: {type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        max:5,
      notEmpty:{
        args:true,
       msg:"weeks no debe estar vacio"
      },
      notNull: {  
        args:true,
       msg:"weeks no presente"
      },
    }
  },
    enroll_cost:{ type:DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
         msg:"enroll_cost no debe estar vacio"
        },
        notNull: {  
          args:true,
         msg:"enroll_cost no presente"
        },
      }        
    },
    minimum_skill:{ type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
         msg:"minimum_skill no debe estar vacio"
        },
        notNull: {  
          args:true,
         msg:"minimum_skill no presente"
        },
      }        
    },
    bootcamps_id:DataTypes.STRING, 
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Courses',
  });
  return Courses;
};