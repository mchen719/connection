const Education = require('../../models/education');

module.exports = {
	createEdu,
	updateEdu,
	showEdu,
	deleteEdu
};

async function createEdu(req, res, next) {
	try {
		const education = await Education.findById(req.params.id);
		res.status(200).json(education);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

async function updateEdu(req, res) {
	try {
		const education = await Education.findOneAndUpdate(req.params.id);
		res.status(200).json(education);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

async function showEdu(req, res) {
	try {
		const education = await Education.findById(req.params.id);
		res.status(200).json(education);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

async function deleteEdu(req, res) {
	try {
		const education = await Education.findOneAndDelete(req.params.id);
		res.status(204);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}
