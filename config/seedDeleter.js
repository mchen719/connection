require('dotenv').config()
require('./database')

const Education = require('../models/education')
const Experience = require('../models/experience')
const Message = require('../models/message')
// unsure right now how to structure notification seeds...
const Notification = require('../models/notification')
const Post = require('../models/post')
const Skill = require('../models/skill')
const User = require('../models/user')

const seedDeleter = async () => {
    await User.deleteMany({})
    await Education.deleteMany({})
    await Experience.deleteMany({})
    await Message.deleteMany({})
    await Notification.deleteMany({})
    await Post.deleteMany({})
    await Skill.deleteMany({})
    console.log("So fresh and so clean-clean!")
    process.exit()
}

    seedDeleter()
