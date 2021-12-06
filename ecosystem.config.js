const {addApiServer, addIndexer} = require("./definitions/ecosystem_settings");

module.exports = {
    apps: [
        addIndexer('coffe2'),
        addApiServer('coffe2', 1)
    ]
};
