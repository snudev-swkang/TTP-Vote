import { MongoClient, ServerApiVersion } from 'mongodb';
import { mongoUri, voteDB, voteCollection } from '../../env.js';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runConnectionTest() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function runFindTest() {

    let votes = [];

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = client.db(voteDB);
        const collection = db.collection(voteCollection);
        votes = await collection.find({}).toArray();

        console.log(votes);
        
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// runConnectionTest().catch(console.dir);
runFindTest().catch(console.dir);