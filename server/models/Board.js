const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema(
	{
		writer: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		title: {
			type: String,
			required: true,
			maxlength: 50,
		},
		description: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Board = mongoose.model('Board', boardSchema);
module.exports = { Board };