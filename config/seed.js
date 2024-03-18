// when the jobs model is completed by lilianne, must inject jobs seeds into this file. CRUCIAL.

// npm run seed to inject seed data into database. npm run seedDeleter to wipe the database entirely.

// we must continue tweaking accordingly as our needs evolve. BE WARY. the for loops must be individually updated for each model alteration.

// Must inject your chosen password into the env file you have. Key: SEED_PASSWORD=    value: whatever password you want.


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
const Job = require('../models/job')

const seed = async () => {
    await User.deleteMany({})
    const usersSeed = await User.create([
        {
            name: "Test User1",
            email: "testUser@email.com",
            password: process.env.SEED_PASSWORD,
            profilePicture: '/img/profilePicture1.jpeg',
            coverPhoto: '/img/CoverPicture.jpg',
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
            profilePicture: '/img/profilePicture3.jpeg',
            coverPhoto: '/img/CoverPicture.jpg',
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
            profilePicture: '/img/profilePicture4.jpeg',
            coverPhoto: '/img/CoverPicture.jpg',
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
            profilePicture: '/img/profilePicture1.jpeg',
            coverPhoto: '/img/CoverPicture.jpg',
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
            profilePicture: '/img/profilePicture2.jpeg',
            coverPhoto: '/img/CoverPicture.jpg',
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
            coverPhoto: '/img/CoverPicture.jpg',
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
            coverPhoto: '/img/CoverPicture.jpg',
            experience: [],
            education: [],
            skills: [],
            notifications: [],
            messages: [],
            posts: []

        }
    ])

    console.log(usersSeed[0]._id)

    await Experience.deleteMany({})
    const experienceSeed = await Experience.create([
        {
            userId: usersSeed[0]._id, // test user 1
            title: "Professional Adult",
            company: "self employed",
            startDate: new Date('February 24 2020 02:20:22'),
            endDate: new Date('April 22 2023 09:21:22'),
            description: "Adulting, all day every day. Super hireable."
        },
        {
            userId: usersSeed[1]._id, // test user 2
            title: "Tax Auditor",
            company: "HNR Block",
            startDate: new Date('March 12 2018 21:20:32'),
            endDate: new Date('April 22 2020 22:32:12'),
            description: "Made sure that the rich paid less and the poor paid more."
        },
        {
            userId: usersSeed[1]._id, // test user 2
            title: "Corporate Accountant",
            company: "Enron",
            startDate: new Date('April 30 2020 15:12:11'),
            endDate: new Date('October 22 2023 11:11:11'),
            description: "Found all of the money that was once embezzled, breathed life into long dead company."
        },
        {
            userId: usersSeed[2]._id, // test user 3
            title: "Software Engineering Instructor",
            company: "General Assembly",
            startDate: new Date('February 24 2015 16:35:23'),
            description: "Singlehandedly trained a generation of AI architects and brought rise to the birth of skynet."
        },
        {
            userId: usersSeed[3]._id, // test user 4
            title: "Scientist",
            company: "Beakers Labs",
            startDate: new Date('May 23 1999 18:11:33'),
            endDate: new Date('July 30 2005 19:11:11'),
            description: "SCIENCE! She blinded me with it!"
        },
        {
            userId: usersSeed[3]._id, // test user 4
            title: "Smarter Scientist",
            company: "Beakers Labs",
            startDate: new Date('August 01 2005 15:41:22'),
            endDate: new Date('September 19 2012 20:44:24'),
            description: "Cured cancer and fully sequenced the human genome."
        },
        {
            userId: usersSeed[3]._id, // test user 4
            title: "Mad Scientist",
            company: "Beaker Labs",
            startDate: new Date('November 12 2012 15:11:21'),
            description: "Not mad as in evil, mad as in can't understand how the world is falling apart this badly."
        },
    ])

    usersSeed[0].experience.push(experienceSeed[0]._id)
    usersSeed[1].experience.push(experienceSeed[1]._id, experienceSeed[2]._id)
    usersSeed[2].experience.push(experienceSeed[3]._id)
    usersSeed[3].experience.push(experienceSeed[4]._id, experienceSeed[5]._id, experienceSeed[6]._id)

    for (let i = 0; i < 4; i++) {
        await usersSeed[i].save()
    }
    await Education.deleteMany({})
    const educationSeed = await Education.create([
        {
            userId: usersSeed[0],
            school: "The School of Hard Knox",
            degree: "Certification",
            fieldOfStudy: "Adulting",
            startDate: new Date('February 9 2009 23:24:00'),
            endDate: new Date('December 17, 2013 05:24:00')
        },
        {
            userId: usersSeed[1],
            school: "New York University",
            degree: "Bachelors of Arts",
            fieldOfStudy: "Accounting",
            startDate: new Date('May 22 2013 13:02:00'),
            endDate: new Date('May 31 2017 18:02:24')
        },
        {
            userId: usersSeed[1],
            school: "New York University",
            degree: "Masters",
            fieldOfStudy: "Accounting",
            startDate: new Date('June 12 2016 21:20:01'),
            endDate: new Date('April 30 2020 19:10:02')
        },
        {
            userId: usersSeed[2],
            school: "General Assembly",
            degree: "Certification",
            fieldOfStudy: "Software Engineering",
            startDate: new Date('October 20 2014 04:10:01'),
            endDate: new Date('January 3 2015 06:22:10')
        },
        {
            userId: usersSeed[2],
            school: "Georgia Tech",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Computer Science",
            startDate: new Date('August 10 2010 14:22:10'),
            endDate: new Date('August 3 2014 17:13:09')
        },
        {
            userId: usersSeed[3],
            school: "Oxford University",
            degree: "PHD",
            fieldOfStudy: "Biology",
            startDate: new Date('July 1 1989 09:20:02'),
            endDate: new Date('May 1 1999 15:50:30')
        },
        {
            userId: usersSeed[4],
            school: "Sarah Lawrence College",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Liberal Arts",
            startDate: new Date('August 1 2009 08:20:20'),
            endDate: new Date('May 24 2013 09:22:12')
        },
        {
            userId: usersSeed[5],
            school: "San Francisco State University",
            degree: "Associate's of Business",
            fieldOfStudy: "Business Administration",
            startDate: new Date('august 24 2019 12:11:01'),
            endDate: new Date('August 21 2023 01:11:10')
        },
        {
            userId: usersSeed[6],
            school: "Florida University",
            degree: "Bachelor's of Arts",
            fieldOfStudy: "Law",
            startDate: new Date('April 20 2019 04:20:20')
        }
    ])

    usersSeed[0].education.push(educationSeed[0]._id)
    usersSeed[1].education.push(educationSeed[1]._id, educationSeed[2]._id)
    usersSeed[2].education.push(educationSeed[4]._id, educationSeed[3]._id)
    usersSeed[3].education.push(educationSeed[5]._id)
    usersSeed[4].education.push(educationSeed[6]._id)
    usersSeed[5].education.push(educationSeed[7]._id)
    usersSeed[6].education.push(educationSeed[8]._id)

    for (let i = 0; i < 6; i++) {
        await usersSeed[i].save()
    }

    await Skill.deleteMany({})
    const skillSeed = await Skill.create([
        {
            userId: usersSeed[0]._id,
            name: "Microsoft Office",
            endorsements: 3
        },
        // below: Experiment in model construction to allow for the same skill to belong to a different user with different endorsements. Must examine further.
        {
            userId: usersSeed[2]._id,
            name: "Microsoft Office",
            endorsements: 2
        },
        {
            userId: usersSeed[3]._id,
            name: "Microsoft Office",
            endorsements: 5
        },
        {
            userId: usersSeed[2]._id,
            name: "Full Stack Development",
            endorsements: 6
        },
        {
            userId: usersSeed[3]._id,
            name: "Animal Genealogy",
            endorsements: 1
        },
        {
            userId: usersSeed[4]._id,
            name: "Creative Writing",
            endorsements: null
        },
        {
            userId: usersSeed[4]._id,
            name: "Microsoft Office",
            endorsements: 4
        },
        {
            userId: usersSeed[5]._id,
            name: "Team Leadership",
            endorsements: 2
        },
        {
            userId: usersSeed[2]._id,
            name: "Legal Documentation",
            endorsements: 3
        }
    ])

    usersSeed[0].skills.push(skillSeed[0]._id)
    usersSeed[2].skills.push(skillSeed[1]._id, skillSeed[8]._id)
    usersSeed[3].skills.push(skillSeed[2]._id, skillSeed[4]._id)
    usersSeed[4].skills.push(skillSeed[5]._id, skillSeed[6]._id)
    usersSeed[5].skills.push(skillSeed[7]._id)

    for (let i = 0; i < 5; i++) {
        await usersSeed[i].save()
    }

    await Post.deleteMany({})
    const postSeed = await Post.create([
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            title: "BRAD!",
            description: "Hey Brad, it's Kevin; s'ah dude, how do I use this app again? lol"
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            title: "BRAD?!",
            description: "Hey Brad, it's Kevin again. Do you mind throwing me an endorsement? S'ah, dude."
        },
        {
            senderId: usersSeed[1]._id,
            receiverId: usersSeed[0]._id,
            title: "...",
            description: "Kevin, we've got to work on your online professional presence..."
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            title: "BRAD...",
            description: "Yeah bro I hear ya... hey is your company hiring?"
        },
        {
            senderId: usersSeed[3]._id,
            receiverId: usersSeed[1]._id,
            title: "Freelance Opportunity",
            description: "Brad I may have an interested party in hiring you out as a subcontracted auditor, shoot me a line and let's go over some data."
        },
        {
            senderId: usersSeed[4]._id,
            receiverId: usersSeed[2]._id,
            title: "Pro Tips for a new dev?",
            description: "Hey there, boss; got any advice for someone wanting to break into the software field?"
        },
        {
            senderId: usersSeed[4]._id,
            receiverId: usersSeed[1]._id,
            title: "Reccs for an accountant",
            description: "Hey Brad, this is James. Would you happen to have any recommendations for a good tax guy? Got a bit of a complicated return this year..."
        },
        {
            senderId: usersSeed[0]._id,
            receiverId: usersSeed[1]._id,
            title: "BRAD! It's me again!",
            description: "Hey Brad, seeing this guy James' post... we have to file taxes EVERY year?"
        },
        {
            senderId: usersSeed[1]._id,
            receiverId: usersSeed[0]._id,
            title: "Kevin please stop.",
            description: "Kevin we really need to talk about your professional demeanor on here..."
        },
        {
            senderId: usersSeed[5]._id,
            receiverId: usersSeed[2]._id,
            title: "Collaboration opportunity",
            description: "Hello! I'm looking for developers in search of collaboration opportunities with finance professionals to get startups off the ground. Would love to pick your brain if you have anyone in mind who'd fit the bill!"
        },
        {
            senderId: usersSeed[2]._id,
            receiverId: usersSeed[5]._id,
            title: "Interested for sure!",
            description: "For sure, just sent you a DM."
        }
    ])

    usersSeed[0].posts.push(postSeed[0]._id, postSeed[1]._id, postSeed[3]._id, postSeed[7]._id)
    usersSeed[1].posts.push(postSeed[2]._id, postSeed[8]._id)
    usersSeed[2].posts.push(postSeed[9]._id)
    usersSeed[3].posts.push(postSeed[4]._id)
    usersSeed[4].posts.push(postSeed[5]._id, postSeed[6]._id)
    usersSeed[5].posts.push(postSeed[8]._id)

    for (let i = 0; i < 5; i++) {
        await usersSeed[i].save()
    }


    await Message.deleteMany({})
    const messageSeed = await Message.create([
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

    for (let i = 0; i < 5; i++) {
        await usersSeed[i].save()
    }

    await Job.deleteMany({})
    const jobSeed = await Job.create([
        {
            title: "Full Stack Developer",
            company: "Start-Ups Today!",
            location: "San Francisco, CA",
            description: "We're a trio of twenty-two year old founders with lofty ambitions of spending all our hedge fund money on the next ego-vanity project you can think of! We're a family here, that means extra hours for no extra pay and no bonuses forever.",
            requirements: ["Ten Years' Full Stack Development", "Microsoft Office", "Git", "Excessive Experience in an Obscure Programming Framework You've Never Heard Of"],
            createdAt: new Date('March 17 2024 17:22:02')
        },
        {
            title: "Legal Defense Counsel",
            company: "MaceRich",
            location: "New York, NY",
            description: "Corporate Conglomerate seeking senior law staff for general on-call defense purposes. Must be willing to oppress the little guy.",
            requirements: ["Twelve+ Years' Experience in Tax Law", "Nine+ Years' Experience in a Corporate Finance Environment", "Proven Track Record of Successful Legal Defenses", "a Can-Do Attitude!"],
            createdAt: new Date('March 10 2024 17:09:49')
        },
        {
            title: "Head Accountant",
            company: "Number Crunchers",
            location: "Atlanta, GA",
            description: "Do you love numbers? Do you love money?! Do you want to work in an environment that does nothing but play with both?! Welcome to the team, Mr. Suit and Tie Accountant!",
            requirements: ["Ten Years' Experience in an Accounting Software", "Must be Willing to Relocate to Georgia", "Excessive Attention to Detail a Must"],
            createdAt: new Date('March 10 2024 21:28:59')
        },
        {
            title: "Junior Back-End Engineer",
            company: "Witty Titles Incorporated",
            location: "Los Angeles, CA",
            description: "Seeking an experienced developer to join us at the bottom rung to help scale up something great! Please note that while this is an entry-level role offering entry-level pay, we will only accept senior-level applicants at this time. Salary non-negotiable.",
            requirements: ["MERN-stack and Back-End developing Experience", "Microsoft Office", "Git", "Heavy Python Experience Required"],
            createdAt: new Date('March 14 2024 22:23:16')
        },
        {
            title: "Account Executive",
            company: "Salesmen United",
            location: "New York, NY",
            description: "Is selling in your blood? Do you wake up sweating over deals you haven't closed yet? Come join the team! No product too obscure and no service too unnecessary is our motto, let's make some money people!",
            requirements: ["Three+ Years' Sales Experience in a High-Volume Environment", "Five+ Years' Experience in a Customer-Facing Setting", "Willingness to travel 95% of the Time"],
            createdAt: new Date('March 15 2024 23:33:44')
        },
        {
            title: "Immigration Lawyer",
            company: "Next Generation American",
            location: "Toronto, CA",
            description: "At Next Generation American, we care about people. We want them to have the same chance at the American Dream as everyone else. Come join us as we help ensure people's liberties are preserved in this great country.",
            requirements: ["Fluency in a Second Language", "Five+ Years' Successful Litigation Experience in a Court of Immigration Law", "Tireless Empathy"],
            createdAt: new Date('March 15 2024 09:02:10')
        },
        {
            title: "Head Chef",
            company: "Marrriot Hotels",
            location: "Chicago, IL",
            description: "Do you love food? Do you love cooking it? Come take charge in the kitchens of our newest expansion! Great Perks!",
            requirements: ["Nine+ Years' Experience as an Executive Chef", "Proficiency in Spanish", "Must Be a Chain Smoker to Excel in this Role"],
            createdAt: new Date('March 14 2024 22:05:11')
        },
        {
            title: "Quality Assurance Tester",
            company: "Witty Titles Incorporated",
            location: "Remote",
            description: "Startup company seeking part-time QA tester with serious XP in the testing game. We like to push horrendous bugs to our code and call it good; that's why we're hiring you!",
            requirements: ["Thirty Five Years' Experience in Unit Testing", "Can-Do Attitude", "Team-Player", "Must be Proficient in Javascript"],
            createdAt: new Date('March 10 2024 08:06:35')
        },
        {
            title: "Paralegal",
            company: "Dumas and Dumas",
            location: "New York, NY",
            description: "Only a Dumas can work with a Dumas! Here at Dumas and Dumas, we're a family firm dedicating to small-claims cases. You will excel in this role if you've ever worked with a Dumas and know the way that we Dumases like to communicate.",
            requirements: ["Microsoft Office", "Neurotic Attention to Detail", "Ten Years' Experience in Legal Documentation"],
            createdAt: new Date('March 13 2024 22:23:12')
        },
        {
            title: "Call Center Representative",
            company: "Scammers 911",
            location: "Remote",
            description: "No Experience Required! We'll train you in everything you know! Experienced applicants only, please.",
            requirements: ["Experience in a Customer-Support Environment", "Patience and Empathy", "Charming Demeanor"],
            createdAt: new Date('March 16 2024 10:11:12')
        },
        {
            title: "Front-End Dev",
            company: "Yeet Unlimited",
            location: "Los Angeles, CA",
            description: "We're a parkour gym looking to style it up on the interwebs with some dope website pages. Help us out?",
            requirements: ["REACT or similar front-end frameworks", "Experience Working in a Deadline Driven Environment", "Love of the Thrill."],
            createdBy: usersSeed[0]._id,
            createdAt: new Date('March 15 2024 22:10:12')
        },
        {
            title: "Parkour Specialist",
            company: "Yeet Unlimited",
            location: "Los Angeles, CA",
            description: "For the thrill seekers seeking to make a buck for their thrills. Join us as we host private events and entertainment vnenues!",
            requirements: ["Physical Fitness", "Microsoft Office", "Five Years Urban Exploration Experience"],
            createdBy: usersSeed[0]._id,
            createdAt: new Date('March 12 2024 11:42:12')
        }
    ])

    process.exit()
}

seed()
