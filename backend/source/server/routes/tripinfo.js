import express from 'express';
import bodyParser from 'body-parser';
import Trip from '../models/tripinfo';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    Trip.find((err, trips) => {
        if (err){
            res.json({
                message: err.message,
                success: false,
            });
        }
        else{
            res.json(trips);
        }
    }).select("name _id");
});
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Trip.findOne({_id: id}, (err, trip) => {
        if (err){
            res.json({
                message: err.message,
                success: false,
            });
        }
        else{
            res.json(trip);
        }
    });
});
router.post('/', (req, res, next) => {
    var trip = new Trip;
    trip.name = req.body.name;
    trip.price = req.body.price;
    trip.description = req.body.description;
    trip.save((err) => {
        if (err){
            console.log(err);
            res.json({
                message: err.message,
                success: false,
            });
        }
        else{
            res.json({
                message: 'Trip created!',
                success: true,
            });
        }
    });
});
router.put('/:id', (req, res, next) => {
    var id = req.params.id; 
    console.log(req.body);
    Trip.findOneAndUpdate({_id: id}, req.body, (err) => {
        if (err){
            console.log(err);
            res.json({
                message: err.message,
                success: false,
            });
        }
        else{
            res.json({
                message: 'Trip Edited!',
                success: true,
            });
        }
    });
});
router.delete('/:id', function(req, res, next) {
    var id = req.params.id; 
    console.log("Delete ID:"+id);
    Trip.remove({_id: id}, (err) => {
        if (err){
            console.log(err);
            res.json({
                message: err.message,
                success: false,
            });
        }
        else{
            res.json({
                message: 'Trip Deleted!',
                success: true,
            });
        }
    });
});


export default router;
