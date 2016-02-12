'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _tripinfo = require('../models/tripinfo');

var _tripinfo2 = _interopRequireDefault(_tripinfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use(_bodyParser2.default.urlencoded({ extended: false }));

router.get('/', function (req, res, next) {
    _tripinfo2.default.find(function (err, trips) {
        if (err) {
            res.json({
                message: err.message,
                success: false
            });
        } else {
            res.json(trips);
        }
    }).select("name _id");
});
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    _tripinfo2.default.findOne({ _id: id }, function (err, trip) {
        if (err) {
            res.json({
                message: err.message,
                success: false
            });
        } else {
            res.json(trip);
        }
    });
});
router.post('/', function (req, res, next) {
    var trip = new _tripinfo2.default();
    trip.name = req.body.name;
    trip.price = req.body.price;
    trip.description = req.body.description;
    trip.save(function (err) {
        if (err) {
            console.log(err);
            res.json({
                message: err.message,
                success: false
            });
        } else {
            res.json({
                message: 'Trip created!',
                success: true
            });
        }
    });
});
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(req.body);
    _tripinfo2.default.findOneAndUpdate({ _id: id }, req.body, function (err) {
        if (err) {
            console.log(err);
            res.json({
                message: err.message,
                success: false
            });
        } else {
            res.json({
                message: 'Trip Edited!',
                success: true
            });
        }
    });
});
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log("Delete ID:" + id);
    _tripinfo2.default.remove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.json({
                message: err.message,
                success: false
            });
        } else {
            res.json({
                message: 'Trip Deleted!',
                success: true
            });
        }
    });
});

exports.default = router;