const router = require('express').Router()
const { User } = require('../../models')

//Register New User
router.post('/users', async function (req,res) {
 const user = await User.create(req.body);
 res.json(user);
});

module.exports = router