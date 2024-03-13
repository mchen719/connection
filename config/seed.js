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
const Notification = require('../models/notification')
const Post = require('../models/post')
const Skill = require('../models/skill')
const User = require('../models/user')

const seed = async () => {
    await User.deleteMany({})
    const users = await User.create([
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
    const experience = await Experience.create([
        {
            userId: users[0]._id, // test user 1
            title: "Professional Adult",
            company: "self employed",
            startDate: "02 24 2020",
            endDate: "04 22 2023",
            description: "Adulting, all day every day. Super hireable."
        },
        {
            userId: users[1]._id, // test user 2
            title: "Tax Auditor",
            company: "HNR Block",
            startDate: "03 12 2018",
            endDate: "04 22 2020",
            description: "Made sure that the rich paid less and the poor paid more."
        },
        {
            userId: users[1]._id, // test user 2
            title: "Corporate Accountant",
            company: "Enron",
            startDate: "04 30 2020",
            endDate: "10 22 2023",
            description: "Found all of the money that was once embezzled, breathed life into long dead company."
        },
        {
            userId: users[2]._id, // test user 3
            title: "Software Engineering Instructor",
            company: "General Assembly",
            startDate: "02 24 2015",
            description: "Singlehandedly trained a generation of AI architects and brought rise to the birth of skynet."
        },
        {
            userId: users[3]._id, // test user 4
            title: "Scientist",
            company: "Beakers Labs",
            startDate: "05 23 1999",
            endDate: "07 30 2005",
            description: "SCIENCE! She blinded me with it!"
        },
        {
            userId: users[3]._id, // test user 4
            title: "Smarter Scientist",
            company: "Beakers Labs",
            startDate: "08 01 2005",
            endDate: "09 19 2012",
            description: "Cured cancer and fully sequenced the human genome."
        },
        {
            userId: users[3]._id, // test user 4
            title: "Mad Scientist",
            company: "Beaker Labs",
            startDate: "11 12 2012",
            description: "Not mad as in evil, mad as in can't understand how the world is falling apart this badly."
        },
    ])

    users[0].experience.push(experience[0])
    users[1].experience.push(experience[1], experience[2])
    users[2].experience.push(experience[3])
    users[3].experience.push(experience[4], experience[5], experience[6])

    await Education.deleteMany({})
    const education = Education.create([
        {
            userId: users[0],
            school: "The School of Hard Knox",
            degree: "Certification",
            fieldOfStudy: "Adulting",
            startDate: "04 20 2019",
            endDate: "08 03 2023"
        },
        {
            userId: users[1],
            school: "New York University",
            degree: "Bachelors of Arts",
            fieldOfStudy: "Accounting",
            startDate: "02 10 2013",
            endDate: "05 23 2017"
        },
        {
            userId: users[1],
            school: "New York University",
            degree: "Masters",
            fieldOfStudy: "Accounting",
            startDate: "06 30 2017",
            endDate: "04 03 2020"
        },
        {
            userId: users[2],
            school: "General Assembly",
            degree: "Certification",
            fieldOfStudy: "Software Engineering",
            startDate: "10 20 2014",
            endDate: "01 03 2015"
        },
        {
            userId: users[2],
            school: "Georgia Tech",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Computer Science",
            startDate: "05 20 2010",
            endDate: "08 03 2014"
        },
        {
            userId: users[3],
            school: "Oxford University",
            degree: "PHD",
            fieldOfStudy: "Biology",
            startDate: "07 01 1989",
            endDate: "05 01 1999"
        },
        {
            userId: users[4],
            school: "Sarah Lawrence College",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Liberal Arts",
            startDate: "08 01 2009",
            endDate: "05 24 2013"
        },
        {
            userId: users[5],
            school: "San Francisco State University",
            degree: "Associate's of Business",
            fieldOfStudy: "Business Administration",
            startDate: "08 24 2019",
            endDate: "08 21 2023"
        },
        {
            userId: users[6],
            school: "Florida University",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Law",
            startDate: "04 20 2019",
        }
    ])

    users[0].education.push(education[0])
    users[1].education.push(education[1], education[2])
    users[2].education.push(education[4], education[3])
    users[3].education.push(education[5])
    users[4].education.push(education[6])
    users[5].education.push(education[7])
    users[6].education.push(education[8])


    await Skill.deleteMany({})
    const skills = Skill.create([
        {
            userId: users[0],
            name: "Microsoft Office",
            endorsements: [users[1], users[2]]
        },
        // below: Experiment in model construction to allow for the same skill to belong to a different user with different endorsements. Must examine further.
        {
            userId: users[2],
            name: "Microsoft Office",
            endorsements: [users[3], users[4]]
        },
        {
            userId: users[3],
            name: "Microsoft Office"
        },
        {
            userId: users[2],
            name: "Full Stack Development",
            endorsements: [users[3], users[4]]
        },
        {
            userId: users[3],
            name: "Animal Genealogy",
            endorsements: [users[5]]
        },
        {
            userId: users[4],
            name: "Creative Writing",
            endorsements: [users[1], users[2], users[3]]
        },
        {
            userId: users[4],
            name: "Microsoft Office"
        },
        {
            userId: users[5],
            name: "Team Leadership"
        },
        {
            userId: users[2],
            name: "Legal Documentation",
            endorsements: [users[3], users[4], users[5]]
        }
    ])

    users[0].skills.push(skills[0])
    users[2].skills.push(skills[1], skills[8])
    users[3].skills.push(skills[2], skills[4])
    users[4].skills.push(skills[5], skills[6])
    users[5].skills.push(skills[7])

    await Post.deleteMany({})
    const posts = Post.create([
        {
            senderId: users[0],
            receiverId: users[1],
            content: "Hey Brad, it's Kevin; s'ah dude, how do I use this app again? lol"
        },
        {
            senderId: users[0],
            receiverId: users[1],
            content: "Hey Brad, it's Kevin again. Do you mind throwing me an endorsement? S'ah, dude."
        },
        {
            senderId: users[1],
            receiverId: users[0],
            content: "Kevin, we've got to work on your online professional presence..."
        },
        {
            senderId: users[0],
            receiverId: users[1],
            content: "Yeah bro I hear ya... hey is your company hiring?"
        },
        {
            senderId: users[3],
            receiverId: users[1],
            content: "Brad I may have an interested party in hiring you out as a subcontracted auditor, shoot me a line and let's go over some data."
        },
        {
            senderId: users[4],
            receiverId: users[2],
            content: "Hey there, boss; got any advice for someone wanting to break into the software field?"
        },
        {
            senderId: users[4],
            receiverId: users[1],
            content: "Hey Brad, this is James. Would you happen to have any recommendations for a good tax guy? Got a bit of a complicated return this year..."
        },
        {
            senderId: users[0],
            receiverId: users[1],
            content: "Hey Brad, seeing this guy James' post... we have to file taxes EVERY year?"
        },
        {
            senderId: users[1],
            receiverId: users[0],
            content: "Kevin we really need to talk about your professional demeanor on here..."
        },
        {
            senderId: users[5],
            receiverId: users[2],
            content: "Hello! I'm looking for developers in search of collaboration opportunities with finance professionals to get startups off the ground. Would love to pick your brain if you have anyone in mind who'd fit the bill!"
        },
        {
            senderId: users[2],
            receiverId: users[5],
            content: "For sure, just sent you a DM."
        }
    ])

    users[0].posts.push(posts[0], posts[1], posts[3], posts[7])
    users[1].posts.push(posts[2], posts[8])
    users[2].posts.push(posts[9])
    users[3].posts.push(posts[4])
    users[4].posts.push(posts[5], posts[6])
    users[5].posts.push(posts[8])

    await Message.deleteMany({})
    const messages = Message.create([
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, still waiting on a reply... really hurting for some scratch, could use some career advice."
        },
        {
            senderId: users[1],
            receiverId: users[2],
            content: "Hello! "
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        },
        {
            senderId: users[0],
            receiverId: users[2],
            content: "S'ah dude, you got any pro tips for becoming a dev? I hear you make dope money just for writing a couple lines of code..."
        }
    ])

    process.exit()
}

    seed()
