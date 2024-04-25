// Maybe can directly use MongoSh on terminal: mongosh "mongodb://localhost:27017"

// Switch to DB, will create one if it doesn't exist
use car_dealership

// Create Cars collection inside DB
db.createCollection("Cars");

// [Create] Insert a single document
db.Cars.insertOne({make: "Toyota", model:"Hyper", year:2012});

// [Create] Insert multiple documents
db.Cars.insertMany([{make: "Maruti", model:"Suzuki", year:2016}, {make: "Mercedes-Benz", year:2024}]);

// [Read] Retrieve all the documents from the collection
db.Cars.find().pretty()

// [Read] Retrieve all the Maruti documents from the collection
db.Cars.find({make: "Maruti"})

// [Read] Retrieve the first Maruti document from the collection
db.Cars.findOne({make: "Maruti"})

// [Update] Update the "year" value according to the matching "make" value
db.Cars.updateOne({make: "Toyota"}, {$set: {year: 2011}})

// [Update] Update all the cars with year less than 2018 as status old
db.Cars.updateMany({year: {$lt: 2018}}, {$set: {status: "old"}})

// [Delete] Delete car with the model as "Hyper"
db.Cars.deleteOne({model: "Hyper"})

// [Delete] Delete all cars with year > 2018
db.Cars.deleteMany({year: {$gt: 2018}})
