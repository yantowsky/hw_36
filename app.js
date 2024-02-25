require('dotenv').config();

const { types, logger } = require('./logger.js');

logger(types.emerg, ": indicates that the system is unusable and requires immediate attention.");
logger(types.alert, ": indicates that immediate action is necessary to resolve a critical issue.");
logger(types.crit, ": signifies critical conditions in the program that demand intervention to prevent system failure.");
logger(types.error, ": indicates error conditions that impair some operation but are less severe than critical situations.");
logger(types.warn, ": signifies potential issues that may lead to errors or unexpected behavior in the future if not addressed.");
logger(types.notice, ": applies to normal but significant conditions that may require monitoring.");
logger(types.info, ": includes messages that provide a record of the normal operation of the system.");
logger(types.debug, ": intended for logging detailed information about the system for debugging purposes.");

try {
    throw new Error("Оpsss!");
} catch (err) {
    console.log("==========================")
    logger(types.error, err.message);
}