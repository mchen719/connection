const Skill = require('../../models/skill');

// Controller function to get all skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createSkill = async (req, res) => {
    try {
        const { name, level } = req.body;
        const skill = new Skill({ name, level });
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, level } = req.body;
        const skill = await Skill.findByIdAndUpdate(id, { name, level }, { new: true });
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        await Skill.findByIdAndDelete(id);
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllSkills,
    createSkill,
    updateSkill,
    deleteSkill,
};