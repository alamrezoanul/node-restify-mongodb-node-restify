'use strict'

/**
 * Module Dependencies
 */
const restify = require('restify'),
    
    mongoose = require('mongoose'),
    config = require('./common/config'),
    dbConnection = require('./common/db-connection'),
    log = require('./common/log')

/**
 * Initialize Server
 */

 
const server = restify.createServer({
    name: config.app.name,
    version: config.app.version
})

/**
 * Bundled Plugins (http://restify.com/#bundled-plugins)
 */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// server.use(restify.jsonBodyParser({ mapParams: true }))
// server.use(restify.acceptParser(server.acceptable))
// server.use(restify.queryParser({ mapParams: true }))
// server.use(restify.fullResponse())

/**
 * Lift Server, Connect to DB & Require Route File
 */
server.listen(config.app.port, () => {

    mongoose.connect(dbConnection.uri, dbConnection.options);


    const db = mongoose.connection;

    db.on('error', err => {
        log.error('An error occurred while attempting to connect to MongoDB', err);
        console.log('An error occurred while attempting to connect to MongoDB', err)
        process.exit(1)
    });

    db.once('open', () => {
        var infomsg = server.name + " " + config.app.version + " ready to accept connections on port " + config.db.port + " in " + config.env + " environment."


        log.info(infomsg)

        require('./routes')({ db, server });

        infomsg = `Server is listening on port ${config.app.port}`
        log.info(infomsg);

    });

})