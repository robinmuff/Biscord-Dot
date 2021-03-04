let configpath = "config/config.json";
const fs = require('fs')
const encryptpwd = require('encrypt-with-password');

function getConfig(key, isEncrypted = false, password = "") {
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

    if (isEncrypted) {
        return encryptpwd.decrypt(val, password);
    }

    return val;
}
exports.getConfig = getConfig;

function setConfig(key, value, isEncrypted = false, password = "") {
    let keys = key.split("/");
    let config = readconfig();

    if (isEncrypted) {
        value = encryptpwd.encrypt(value, password);
    }

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