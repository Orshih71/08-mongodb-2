const express = require('express');
const router = express.Router();

/* GET search. */
router.get('/search', async (req, res, next) => {
	try{
		const {long, lat} = req.query;
		if(long && lat){
			const db = req.db;
			const result = await db.collection('locations').find({"location": {$near: {
						$geometry: { type: "Point",  coordinates: [ parseFloat(long), parseFloat(lat) ] },
						$maxDistance: 5000
					}}}).limit(3).toArray();
			res.json(result);
		}
		else next("Empty request");
	}
	catch (e) {
		next(e);
	}
});
router.post('/', async (req, res, next) => {
	try{
		const db = req.db;
		await db.collection('locations').insert(req.body, function (err, doc) {
			if(err) return next(err);
			else res.sendStatus(200);
		});
	}
	catch (e) {
		return next(e);
	}
});
module.exports = router;
