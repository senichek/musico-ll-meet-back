const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DB_URL,
    //ssl: false,
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect();

module.exports = client;
