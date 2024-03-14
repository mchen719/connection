const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	school: {
		type: String,
		required: true
	},
	degree: {
		type: String,
		required: true
	},
	fieldOfStudy: {
		type: String,
		required: true
	},
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
		description: String
	}
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
