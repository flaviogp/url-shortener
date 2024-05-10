
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('urls', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      original: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      short: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('urls');

  }
};
