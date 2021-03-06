const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

userRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs', { title: 1 });

  res.json(users);
});

userRouter.post('/', async (req, res, next) => {
  try {
    const { body } = req;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
