const Education = require('../../models/education');

module.exports = {
	createEdu,
	updateEdu,
	showEdu,
	deleteEdu
};

async function createEdu(req, res, next) {
	try {
		const education = await Education.create(req.body);
		res.status(200).json(education);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

async function updateEdu(req, res) {
	try {
		const updatedEducation = await Education.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }
		);
		res.status(200).json(updatedEducation);
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
		res.status(200).json('Education Deleted');
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}
