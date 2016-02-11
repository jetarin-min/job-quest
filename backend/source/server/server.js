import express from 'express';
import tripInfoApi from './routes/tripinfo';
import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.database);

const app = new express;

app.use('/trips',tripInfoApi);

app.listen('3000', () =>{
    console.log("APP running!");
});
