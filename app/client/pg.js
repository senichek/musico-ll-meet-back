const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.HEROKU_POSTGRESQL_YELLOW_URL,
    //ssl: false,
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect();

module.exports = client;
