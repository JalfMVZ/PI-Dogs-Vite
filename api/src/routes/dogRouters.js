const { getDogsHandler, getIdDog,  postDogsHandler} = require("../Handlers/Dogs")



const routerDogs = require('express').Router();

routerDogs.get('/', getDogsHandler);
routerDogs.get('/:id', getIdDog);
routerDogs.post("/",  postDogsHandler);








module.exports = routerDogs;