const router = require('express').Router()
const { User } = require('../../models')

//Register New User
router.post('/', async function (req,res) {
 const user = await User.create(req.body);
 res.json(user);
});

//get users
router.get('/', async function (req,res) {
  const users = await User.find({}).populate('thoughts');
  res.json(users);
});

//get one user
router.get('/:id', async function (req, res) {
  const user = await User.findById(req.params.id).populate('thoughts');
  res.json(user);
});

//update one users
router.put('/:id', async function (req,res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});

//delete a user
router.delete('/:id', async function  (req,res) {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

// add a friend
router.post('/:userId/friend/:friendId', async function(req,res) {
  const friend = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } });
  const friend2 = await User.findByIdAndUpdate(req.params.friendId, { $addToSet: { friends: req.params.userId } });
  res.sendStatus(200);
});

// delete a friend
router.delete('/:userId/friend/:friendId', async function (req, res) {
  const friend = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } });
  const friend2 = await User.findByIdAndUpdate(req.params.friendId, { $pull: { friends: req.params.userId } });
  res.sendStatus(200);
});

module.exports = router