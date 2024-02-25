const types = {
    emerg: "Emergency",
    alert: "Alert",
    crit: "Critical",
    error: "Error",
    warn: "Warning",
    notice: "Notice",
    info: "Informational",
    debug: "Debug"
}
const env = process.env.NODE_ENV;
console.log(`${env} includes:`);

const logger = (type, msg, ...args) => {
    if (env === 'development') {
        if ([types.emerg, types.alert, types.crit, types.error, types.warn, types.notice].includes(type)) {
            console.log(type, msg);
        }
    } else if (env === 'production') {
        if ([types.emerg, types.alert, types.crit, types.error].includes(type)) {
            console.log(type, msg);
        }
    } else {
        console.log(type, msg);
    }
}

module.exports = {
    types,
    logger
}