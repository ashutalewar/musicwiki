'use strict';

//command to run migrations
//sequelize db:migrate

module.exports = {
  up: function (migration, DataTypes, done) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    migration.addColumn(
      'singers',
      'migratedfieldad',
      DataTypes.STRING
    )

    done();
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
