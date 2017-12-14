const express = require('express');
const router = express.Router();

const Blog = require('../models/blog.js');

router.get('/', async (req, res) => {

	const allblogs = await Blog.find();
	res.json(allblogs);
});

router.post('/', async (req, res) => {

	try {
		const addblog = await Blog.create(req.body);
		res.json(addblog);
	} catch (err) {
		console.log(err.message);
	}
});

router.delete('/:id', async (req, res) => {

	try {
		const rmvblog = await Blog.findByIdAndRemove(req.params.id);
		res.json(rmvblog);
	} catch (err) {
		console.log(err.message);
	}
});

router.put('/:id', async (req, res) => {

	try {
		const updateblog = await Blog.findByIdAndUpdate(req.params.id, req.body);
		res.json(updateblog);
	} catch (err) {
		console.log(err.message);
	}
});

module.exports = router;