const { Router } = require('express');
const routerDogs = require('./dogRouters');
const temperamentsRouter= require('./tempRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router({});

// Configurar routers
router.use("/dogs", routerDogs)
router.use("/temperaments",  temperamentsRouter )


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
