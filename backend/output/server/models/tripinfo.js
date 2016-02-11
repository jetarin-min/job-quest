'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TripInfoSchema = new _mongoose2.default.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
});

exports.default = _mongoose2.default.model('tripinfo', TripInfoSchema);