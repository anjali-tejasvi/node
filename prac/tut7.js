///Inserting data in mongo

1. use demo
2. db.items.insertOne({name:"Apple", price:"2200", rating:4.5,
qty: 233,sold: 98})

//to insert multiple
3. db.items.insertMany([{name:"Apple", price:"$2200", rating:4.5,
qty: 233,sold: 98},{
    name:"Moto", price:"2200", rating:4.0,
qty: 199,sold: 57
},{
    name:"relme", price:"22300", rating:3.0,
qty: 109,sold: 67
},
{
    name:"Samsung", price:"22000", rating:3.5,
qty: 199,sold: 57
}])

4. db.items.find()

// Searching for data in mongodb
5. db.items.find({rating:4.5})