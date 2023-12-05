require('dotenv').config
const http = require('http');
const app = require('./src/app');
const connectToDB = require('./src/config/database');
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async() => {
    await connectToDB();
    server.listen(port, () => {
        console.log(`oniline course server is running on: ${port}`);
    })
};

main()
















// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express();
// const port = process.env.PORT || 5000;


// // middleware
// app.use(cors({
//     origin: [
//         'http://localhost:5173',
//         'http://localhost:5174',
//     ],
//     credentials: true
// }));

// app.use(express.json());


// // connect to mongodb

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m4j1j7e.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         // await client.connect();
//         const databaseName = client.db('onlineCourseDB');
//         const courseCollection = databaseName.collection('courses');


//         //  get courses api
//         app.get('/courses', async (req, res) => {
//             try {
//                 const cursor = courseCollection.find();
//                 const result = await cursor.toArray();
//                 res.status(200).json(result);
//             } catch (error) {
//                 console.error('Error getting course data:', error);
//                 res.status(500).json({ message: 'Internal server error' });
//             }
//         })

//         // get course details api
//         app.get('/courses/:id', async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const query = { _id: new ObjectId(id) }
//                 const result = await courseCollection.findOne(query);
//                 res.status(200).json(result);
//             } catch (error) {
//                 console.error('Error getting course data:', error);
//                 res.status(500).json({ message: 'Internal server error' });
//             }
//         });

//         // create course  api
//         app.post('/courses', async (req, res) => {
//             try {
//                 const newcourse = await req.body;
//                 const existingcourse = await courseCollection.findOne({ courseTitle: newcourse.courseTitle });
//                 if (existingcourse) {
//                     return res.status(400).json({ message: 'This course already exists' });
//                 }
//                 const result = await courseCollection.insertOne(newcourse);

//                 if (result.acknowledged) {
//                     res.status(201).json({ message: 'course created successfully' });
//                 } else {
//                     res.status(500).json({ message: 'Failed to create course' });
//                 }
//             } catch (error) {
//                 console.error('Error inserting course data:', error);
//                 res.status(500).json({ message: 'Internal server error' });
//             }
//         });

//         // delete course
//         app.delete('/courses/:id',async (req, res) => {
//             try {
//                 const id = req.params.id;
//                 const query = { _id: new ObjectId(id) }
//                 const result = await courseCollection.deleteOne(query);
//                 res.send(result)
//             } catch (error) {
//                 console.error('Error delete course data:', error);
//                 res.status(500).json({ message: 'Internal server error' });
//             }
//         });


//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);


// app.get('/', (req, res) => {
//     res.send('Online course server is running')
// })

// app.listen(port, () => {
//     console.log(`online course server is running on port: ${port}`);
// })
