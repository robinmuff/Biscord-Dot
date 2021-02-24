var configpath = "config/config.json";
const fs = require('fs')

function getConfig(key) {
    let keys = key.split("/");
    var config = readconfig();

    var val;
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
    var config = readconfig();

    let val = "config";
    for (let i = 0; i < keys.length; i++) {
        val += ('["' + keys[i] + '"]');
    }
    val += ' = "' + value + '"';

    eval(val)

    writeconfig(config);
}
exports.setConfig = setConfig;


function readconfig() {
    return JSON.parse(fs.readFileSync(configpath, 'utf-8'));
}
function writeconfig(config) {
    fs.writeFileSync(configpath, JSON.stringify(config), 'utf-8');
}