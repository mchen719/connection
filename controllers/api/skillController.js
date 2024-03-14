const skill = require('../../models/skill');
const User = require('../../models/user')

// CREATE
const createSkill = async (req, res, next) => {
    try {
        const createdSkill = await Skill.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.skills.addToSet(createdSkill)
        await user.save()
        res.locals.data.skill = createdSkill
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const destroySkill = async (req, res, next) => {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id)
        res.locals.data.skill = deletedSkill
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateSkill = async (req, res, next) => {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.skill = updatedSkill
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithSkill = (req, res) => {
    res.json(res.locals.data.skill)
}

module.exports = {
    createSkill,
    destroySkill,
    updateSkill,
    respondWithSkill
}