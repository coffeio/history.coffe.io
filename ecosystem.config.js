const {addApiServer, addIndexer} = require("./definitions/ecosystem_settings");

module.exports = {
    apps: [
        addIndexer('coffe'),
        addApiServer('coffe', 1)
    ]
};
