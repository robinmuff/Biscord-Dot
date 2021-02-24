let configpath = "config/config.json";
const fs = require('fs')

function getConfig(key) {
    let keys = key.split("/");
    let config = readconfig();

    let val;
    for (let i = 0; i < keys.length; i++) {
        if (i == 0) {
        val = config[keys[i]];
        } else {
        val = val[keys[i]];
        }
    }

    return val;
}
exports.getConfig = getConfig;

function setConfig(key, value) {
    let keys = key.split("/");
    let config = readconfig();

    eval(createconfigstring(keys, value));

    writeconfig(config);
}
exports.setConfig = setConfig;


function readconfig() {
    return JSON.parse(fs.readFileSync(configpath, 'utf-8'));
}
function writeconfig(config) {
    fs.writeFileSync(configpath, JSON.stringify(config), 'utf-8');
}
function createconfigstring(keys, value) {
    let searchquerry = "";
    for (let i = 0; i < keys.length; i++) {
        searchquerry += ('["' + keys[i] + '"]');
    }

    return "config" + searchquerry + ' = "' + value + '"';
}