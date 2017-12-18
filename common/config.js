let NODE_ENV = process.env.NODE_ENV || 'development';
let NODE_HOST = process.env.NODE_HOST || '127.0.0.1';
let NODE_PORT = process.env.NODE_PORT || 3000;
let MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1';
let MONGO_PORT = process.env.MONGO_PORT || 27017;
let LOG_LEVEL = process.env.LOG_LEVEL || 'info';


let APP_NAME = 'node-restify-mongodb-node-restify-';
let DB_NAME = "todos_";

const APP_VERSION = "1.0.0"
let config = {

    development: {
        env: NODE_ENV,
        app: {
            name: APP_NAME + NODE_ENV,
            version: APP_VERSION,
            address: NODE_HOST,
            port: NODE_PORT
        },
        db: {
            host: MONGO_HOST,
            port: MONGO_PORT,
            name: DB_NAME + NODE_ENV,
        },
        log: {
            name: APP_NAME + NODE_ENV,
            level: LOG_LEVEL
        }
    },
    test: {
        env: NODE_ENV,
        app: {
            name: APP_NAME + NODE_ENV,
            version: APP_VERSION,
            address: NODE_HOST,
            port: NODE_PORT
        },
        db: {
            host: MONGO_HOST,
            port: MONGO_PORT,
            name: DB_NAME + NODE_ENV,
        },
        log: {
            name: APP_NAME + NODE_ENV,
            level: LOG_LEVEL
        }
    },
    production: {
        env: NODE_ENV,
        app: {
            name: APP_NAME + NODE_ENV,
            version: APP_VERSION,
            address: NODE_HOST,
            port: NODE_PORT
        },
        db: {
            host: MONGO_HOST,
            port: MONGO_PORT,
            name: DB_NAME + NODE_ENV,
        },
        log: {
            name: APP_NAME + NODE_ENV,
            level: LOG_LEVEL
        }
    }
};

module.exports = config[NODE_ENV];