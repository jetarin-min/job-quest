'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tripinfo = require('./routes/tripinfo');

var _tripinfo2 = _interopRequireDefault(_tripinfo);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.database);

var app = new _express2.default();

app.use('/trips', _tripinfo2.default);

app.listen('3000', function () {
    console.log("APP is running on port:3000!");
});