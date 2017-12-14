const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({

	user: {type: String, require: true},
	title: {type: String, require: true},
	content: {type: String, require: true}
});

module.exports = mongoose.model('Blog', blogSchema);