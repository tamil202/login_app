const mongoose = require('mongoose');
require('dotenv').config();
let uri = process.env.URI;
const { MongoMemoryServer } = require('mongodb-memory-server');

 const dbsconnect = async () => {
    try {
        const mogomemory = await MongoMemoryServer.create();
        const geturi = mogomemory.getUri();
        mongoose.set('strictQuery')
        const dbconnect = mongoose.connect(geturi);
        console.log(`database connected successfully`);
        return dbconnect;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

module.exports = { dbsconnect };