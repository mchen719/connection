// currently experiencing an issue wherein the user's arrays are not updating in database while the models themselves are. must investigate further.
// why is my database forcing it to be plural educations not singular education? I don't point to that anywhere.
// Group Talk: We should consider whether or not we want to remove the 'endorsements' of the skill model. It may be more pain than it's worth.
// currently getting undefineds for my stuff, what's going on here. experiences was fine but education / skills both so far have been failing.
// possible cause is because I'm double naming genres. user.name vs name, must specify seed variable as unique.

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

const seed = async () => {
    await User.deleteMany({})
    const usersSeed = await User.create([
        {
            name: "Test User1",
            email: "testUser@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        },
        {
            name: "Test2 User2",
            email: "testUser2@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []
        },
        {
            name: "Test3 User3",
            email: "testUser3@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        },
        {
            name: "Test4 User4",
            email: "testUser4@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        },
        {
            name: "Test5 User5",
            email: "testUser5@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        },
        {
            name: "Test6 User6",
            email: "testUser6@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        },
        {
            name: "Test7 User7",
            email: "testUser7@email.com",
            password: process.env.SEED_PASSWORD,
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        }
    ])


    await Experience.deleteMany({})
    const experienceSeed = await Experience.create([
        {
            userId: usersSeed[0]._id, // test user 1
            title: "Professional Adult",
            company: "self employed",
            startDate: "02 24 2020",
            endDate: "04 22 2023",
            description: "Adulting, all day every day. Super hireable."
        },
        {
            userId: usersSeed[1]._id, // test user 2
            title: "Tax Auditor",
            company: "HNR Block",
            startDate: "03 12 2018",
            endDate: "04 22 2020",
            description: "Made sure that the rich paid less and the poor paid more."
        },
        {
            userId: usersSeed[1]._id, // test user 2
            title: "Corporate Accountant",
            company: "Enron",
            startDate: "04 30 2020",
            endDate: "10 22 2023",
            description: "Found all of the money that was once embezzled, breathed life into long dead company."
        },
        {
            userId: usersSeed[2]._id, // test user 3
            title: "Software Engineering Instructor",
            company: "General Assembly",
            startDate: "02 24 2015",
            description: "Singlehandedly trained a generation of AI architects and brought rise to the birth of skynet."
        },
        {
            userId: usersSeed[3]._id, // test user 4
            title: "Scientist",
            company: "Beakers Labs",
            startDate: "05 23 1999",
            endDate: "07 30 2005",
            description: "SCIENCE! She blinded me with it!"
        },
        {
            userId: usersSeed[3]._id, // test user 4
            title: "Smarter Scientist",
            company: "Beakers Labs",
            startDate: "08 01 2005",
            endDate: "09 19 2012",
            description: "Cured cancer and fully sequenced the human genome."
        },
        {
            userId: usersSeed[3]._id, // test user 4
            title: "Mad Scientist",
            company: "Beaker Labs",
            startDate: "11 12 2012",
            description: "Not mad as in evil, mad as in can't understand how the world is falling apart this badly."
        },
    ])

    usersSeed[0].experience.push(experienceSeed[0]._id)
    usersSeed[1].experience.push(experienceSeed[1]._id, experienceSeed[2]._id)
    usersSeed[2].experience.push(experienceSeed[3]._id)
    usersSeed[3].experience.push(experienceSeed[4]._id, experienceSeed[5]._id, experienceSeed[6]._id)

    await Education.deleteMany({})
    const educationSeed = Education.create([
        {
            userId: usersSeed[0],
            school: "The School of Hard Knox",
            degree: "Certification",
            fieldOfStudy: "Adulting",
            startDate: "04 20 2019",
            endDate: "08 03 2023"
        },
        {
            userId: usersSeed[1],
            school: "New York University",
            degree: "Bachelors of Arts",
            fieldOfStudy: "Accounting",
            startDate: "02 10 2013",
            endDate: "05 23 2017"
        },
        {
            userId: usersSeed[1],
            school: "New York University",
            degree: "Masters",
            fieldOfStudy: "Accounting",
            startDate: "06 30 2017",
            endDate: "04 03 2020"
        },
        {
            userId: usersSeed[2],
            school: "General Assembly",
            degree: "Certification",
            fieldOfStudy: "Software Engineering",
            startDate: "10 20 2014",
            endDate: "01 03 2015"
        },
        {
            userId: usersSeed[2],
            school: "Georgia Tech",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Computer Science",
            startDate: "05 20 2010",
            endDate: "08 03 2014"
        },
        {
            userId: usersSeed[3],
            school: "Oxford University",
            degree: "PHD",
            fieldOfStudy: "Biology",
            startDate: "07 01 1989",
            endDate: "05 01 1999"
        },
        {
            userId: usersSeed[4],
            school: "Sarah Lawrence College",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Liberal Arts",
            startDate: "08 01 2009",
            endDate: "05 24 2013"
        },
        {
            userId: usersSeed[5],
            school: "San Francisco State University",
            degree: "Associate's of Business",
            fieldOfStudy: "Business Administration",
            startDate: "08 24 2019",
            endDate: "08 21 2023"
        },
        {
            userId: usersSeed[6],
            school: "Florida University",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Law",
            startDate: "04 20 2019",
        }
    ])

    usersSeed[0].education.push(educationSeed[0]._id)
    usersSeed[1].education.push(educationSeed[1]._id, educationSeed[2]._id)
    usersSeed[2].education.push(educationSeed[4]._id, educationSeed[3]._id)
    usersSeed[3].education.push(educationSeed[5]._id)
    usersSeed[4].education.push(educationSeed[6]._id)
    usersSeed[5].education.push(educationSeed[7]._id)
    usersSeed[6].education.push(educationSeed[8]._id)


    await Skill.deleteMany({})
    const skillSeed = Skill.create([
        {
            userId: usersSeed[0]._id,
            name: "Microsoft Office",
            endorsements: [usersSeed[1], usersSeed[2]]
        },
        // below: Experiment in model construction to allow for the same skill to belong to a different user with different endorsements. Must examine further.
        {
            userId: usersSeed[2]._id,
            name: "Microsoft Office",
            endorsements: [usersSeed[3], usersSeed[4]]
        },
        {
            userId: usersSeed[3]._id,
            name: "Microsoft Office"
        },
        {
            userId: usersSeed[2]._id,
            name: "Full Stack Development",
            endorsements: [usersSeed[3]._id, usersSeed[4]._id]
        },
        {
            userId: usersSeed[3]._id,
            name: "Animal Genealogy",
            endorsements: [usersSeed[5]._id]
        },
        {
            userId: usersSeed[4]._id,
            name: "Creative Writing",
            endorsements: [usersSeed[1]._id, usersSeed[2]._id, usersSeed[3]._id]
        },
        {
            userId: usersSeed[4]._id,
            name: "Microsoft Office"
        },
        {
            userId: usersSeed[5]._id,
            name: "Team Leadership"
        },
        {
            userId: usersSeed[2]._id,
            name: "Legal Documentation",
            endorsements: [usersSeed[3]._id, usersSeed[4]._id, usersSeed[5]._id]
        }
    ])

    usersSeed[0].skills.push(skillSeed[0]._id)
    usersSeed[2].skills.push(skillSeed[1]._id, skillSeed[8]._id)
    usersSeed[3].skills.push(skillSeed[2]._id, skillSeed[4]._id)
    usersSeed[4].skills.push(skillSeed[5]._id, skillSeed[6]._id)
    usersSeed[5].skills.push(skillSeed[7]._id)

    await Post.deleteMany({})
    const postSeed = Post.create([
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            content: "Hey Brad, it's Kevin; s'ah dude, how do I use this app again? lol"
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            content: "Hey Brad, it's Kevin again. Do you mind throwing me an endorsement? S'ah, dude."
        },
        {
            senderId: usersSeed[1]._id,
            receiverId: usersSeed[0]._id,
            content: "Kevin, we've got to work on your online professional presence..."
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            content: "Yeah bro I hear ya... hey is your company hiring?"
        },
        {
            senderId: usersSeed[3]._id,
            receiverId: usersSeed[1]._id,
            content: "Brad I may have an interested party in hiring you out as a subcontracted auditor, shoot me a line and let's go over some data."
        },
        {
            senderId: usersSeed[4]._id,
            receiverId: usersSeed[2]._id,
            content: "Hey there, boss; got any advice for someone wanting to break into the software field?"
        },
        {
            senderId: usersSeed[4]._id,
            receiverId: usersSeed[1]._id,
            content: "Hey Brad, this is James. Would you happen to have any recommendations for a good tax guy? Got a bit of a complicated return this year..."
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            content: "Hey Brad, seeing this guy James' post... we have to file taxes EVERY year?"
        },
        {
            senderId: usersSeed[1]._id,
            receiverId: usersSeed[0]._id,
            content: "Kevin we really need to talk about your professional demeanor on here..."
        },
        {
            senderId: usersSeed[5]._id,
            receiverId: usersSeed[2]._id,
            content: "Hello! I'm looking for developers in search of collaboration opportunities with finance professionals to get startups off the ground. Would love to pick your brain if you have anyone in mind who'd fit the bill!"
        },
        {
            senderId: usersSeed[2]._id,
            receiverId: usersSeed[5]._id,
            content: "For sure, just sent you a DM."
        }
    ])

    usersSeed[0].posts.push(postSeed[0]._id, postSeed[1]._id, postSeed[3]._id, postSeed[7]._id)
    usersSeed[1].posts.push(postSeed[2]._id, postSeed[8]._id)
    usersSeed[2].posts.push(postSeed[9]._id)
    usersSeed[3].posts.push(postSeed[4]._id)
    usersSeed[4].posts.push(postSeed[5]._id, postSeed[6]._id)
    usersSeed[5].posts.push(postSeed[8]._id)

    await Message.deleteMany({})
    const messageSeed = Message.create([
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[2]._id,
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[2]._id,
            content: "S'ah dude, still waiting on a reply... really hurting for some scratch, could use some career advice."
        },
        {
            senderId: usersSeed[5]._id,
            receiverId: usersSeed[2]._id,
            content: "Hello! I'm interested in collaborating with you on a new start-up concept. I'm a seasoned finance expert looking to find some talented devs to build something great. Let's connect!"
        },
        {
            senderId: usersSeed[2]._id,
            receiverId: usersSeed[5]._id,
            content: "Would you be able to give me a little more data on the project in mind? I've got a pretty full plate right now but always happy to discuss details..."
        },
        {
            senderId: usersSeed[5]._id,
            receiverId: usersSeed[2]._id,
            content: "Sure, we're looking to jump into an anti-aging biotech outfit aimed at making our dogs immortal. We can't pay but we'd have the opportunity to pay once we grow!"
        },
        {
            senderId: usersSeed[5]._id,
            receiverId: usersSeed[2]._id,
            content: "...Hello?"
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[2]._id,
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: usersSeed[4]._id,
            receiverId: usersSeed[2]._id,
            content: "Hi there! Looking to connect and talk shop about the coding life!"
        },
        {
            senderId: usersSeed[1]._id,
            receiverId: usersSeed[5]._id,
            content: "Hey how are things?"
        }
    ])
    // I may be confusing the sender vs receiver ID in terms of who should be having the message pushed into their array. Must confirm.
    usersSeed[0].messages.push(messageSeed[0]._id, messageSeed[1]._id, messageSeed[6]._id)
    usersSeed[1].messages.push(messageSeed[8]._id)
    usersSeed[2].messages.push(messageSeed[3]._id)
    usersSeed[4].messages.push(messageSeed[7]._id)
    usersSeed[5].messages.push(messageSeed[2]._id, messageSeed[4]._id, messageSeed[5]._id)
console.log(usersSeed)
    process.exit()
}

    seed()
