let db;
db.restaurants = undefined;
//1
db.restaurants.find({});
//2
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1});
//3
db.restaurants.find({}, {"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1});
//4
db.restaurants.find({}, {"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "zipcode": 1});
//5
db.restaurants.find({district: "Bronx"});
//6
db.restaurants.find({district: "Bronx"}).limit(5);
//7
db.restaurants.find({district: "Bronx"}).skip(5).limit(5);
//8
db.restaurants.find({"address.coord": {$elemMatch: {$lte: -95.754168}}});
//9
db.restaurants.find({
	cuisine: {$ne: "American"},
	"grades.score": {$gt: 70},
	"address.coord": {$elemMatch: {$lte: -65.754168}}
});
//10
db.restaurants.find({"name": {$regex: /^Wil/}}, {"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1});
//11
db.restaurants.find({"name": {$regex: /ces$/}}, {"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1});
//12
db.restaurants.find({"name": {$regex: /Reg/}}, {"_id": 0, "restaurant_id": 1, "name": 1, "district": 1, "cuisine": 1});
//13
db.restaurants.find({district: "Bronx", cuisine: {$in: ['American ', 'Chinese']}}, {
	"_id": 0,
	"restaurant_id": 1,
	"name": 1,
	"district": 1,
	"cuisine": 1
});
//14
db.restaurants.find({district: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {
	"_id": 0,
	"restaurant_id": 1,
	"name": 1,
	"district": 1,
	"cuisine": 1
});
//15
db.restaurants.find({district: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {
	"_id": 0,
	"restaurant_id": 1,
	"name": 1,
	"district": 1,
	"cuisine": 1
});
//16
db.restaurants.find({"grades.score": {$not: {$gt: 10}}}, {
	"_id": 0,
	"restaurant_id": 1,
	"name": 1,
	"district": 1,
	"cuisine": 1
});
//17
db.restaurants.find({"address.coord.1": {$gt: 42, $lt: 52}}, {
	"_id": 0,
	"restaurant_id": 1,
	"name": 1,
	"district": 1,
	"cuisine": 1
});
//18
db.restaurants.find({}).sort({name: 1});
//19
db.restaurants.find({}).sort({name: -1});
//20
db.restaurants.find({}).sort({cuisine: 1, district: -1});
//21
db.restaurants.find({"address.coord": {$type: "double"}});
//22
db.restaurants.find({"name": {$regex: /^Mad/}}, {
	"_id": 0,
	"name": 1,
	"district": 1,
	"address.coord": 1,
	"cuisine": 1
});

