'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("enterprises", [
    {
      uuid: "cda783bb-338c-41b4-912b-10c3d2c247e3",
      name: "Colombia Sport",
      nit: 1104870258,
      phone: "28858741",
      address: "Calle 10",
      email: "colombia@csport.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: "cda783bb-338c-41b4-912b-24c3d2c247e3",
      name: "Barcelona Sport",
      nit: 1104872258,
      phone: "28858715",
      address: "Calle 15",
      email: "barcelona@csport.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: "cda783bb-338c-41b4-935b-12c3d2c247e3",
      name: "Junior Sport",
      nit: 1104870227,
      phone: "28858727",
      address: "Calle 27",
      email: "junior@csport.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: "cda783bb-338c-18b4-912b-12c3d2c247e3",
      name: "Tolú Sport",
      nit: 1104870224,
      phone: "28858741",
      address: "Calle 24",
      email: "tolu@csport.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: "cda778bb-338c-41b4-912b-12c3d2c247e3",
      name: "Sincelejo Sport",
      nit: 1104870215,
      phone: "28858715",
      address: "Calle 20",
      email: "sincelejo@csport.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: "cda783bb-378c-41b4-912b-14c3d2c247e3",
      name: "Medellin Sport",
      nit: 1104870205,
      phone: "28858705",
      address: "Calle 10",
      email: "medellin@csport.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }

   ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('enterprises', {}, null);
  }
};
