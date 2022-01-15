// calling express router
const router = require('express').Router();
// defining api routes
const apiRoutes = require('./api');

// telling the router to use the /api route from the apiRoutes const defined above
router.use('/api', apiRoutes)

// error catch for wrong route
router.use((req,res) => {
  return res.send('Wong Route!');
});

//export router
module.exports = router;