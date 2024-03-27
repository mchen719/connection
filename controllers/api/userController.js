const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkToken = (req, res) => {
  console.log('req.user', req.user);
  res.json(req.exp);
}

const dataController = {
  async create(req, res, next) {
    try {
      const user = await User.create(req.body);
      console.log(user);
      const token = createJWT(user);
      res.locals.data.user = user;
      res.locals.data.token = token;
      next();
    } catch (e) {
      console.log('you got a database problem');
      console.log(e);
      res.status(400).json(e);
    }
  },
  async login(req, res, next) {
    console.log("HELP");
    try {
      const user = await User.findOne({ email: req.body.email }).populate("experience education skills posts");
      console.log(user);
      if (!user) throw new Error("CANNOT FIND USER");
      console.log("NEW ERROR");
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error("UNABLE TO MATCH PASSWORD");
      res.locals.data.user = user;
      res.locals.data.token = createJWT(user);
      next();
    } catch (error) {
      res.status(400).json({msg: error.message });
    }
  },
  async update(req, res, next) {
    try {
      const updates = Object.keys(req.body);
      const user = await User.findOne({ _id: req.params.id});
      updates.forEach(update => user[update] = req.body[update]);
      await user.save();
      const token = createJWT(user);
      res.json({ user, token });
      console.log(user); // delete upon completion
    } catch {
      res.status(400).json('Bad Credentials');
    }
  },
  async delete(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id});
      user.deleteOne();
      res.json([{ msg: 'user deleted' }, user]);
      console.log(`${user.name} has been deleted`);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
  async show(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
  async getAllUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  async addFriend(req, res, next) {
    try {
      const userId = req.params.id; // Id of the current user
      const friendId = req.body.friendId; // Id of the friend to be added

      // If friendId is valid and exists in the database
      const user = await User.findById(userId);
      user.connections.push(friendId);
      await user.save();
      res.status(200).json({ message: "Friend added successfully" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
};

const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

