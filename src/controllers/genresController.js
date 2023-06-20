const db = require('../database/models');

module.exports = {
    list: () => {
        return db.Genre.findAll();
    },
    detail: (id) => {
        return db.Genre.findByPk(id);
    }
};
