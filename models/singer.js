'use strict';
module.exports = function(sequelize, DataTypes) {
  var singer = sequelize.define('singer', {
    wiki_id         :   {   type: DataTypes.STRING, unique: true  },
    timestamp   :   {   type:DataTypes.BIGINT   }, 
    wiki_url    :   {   type:DataTypes.STRING   },
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return singer;
};