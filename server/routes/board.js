const express = require('express');
const router = express.Router();
const { Board } = require('../models/board');

router.post('/delete', (req, res) => {
	Board.remove({ _id: req.body._id }, function (err) {
		if (err) return res.json({ success: false, err });
		return res.json({ success: true });
	});
});

router.post('/update', (req, res) => {
	try {
		Board.update(
			{ _id: req.body._id },
			{
				title: req.body.title,
				description: req.body.discription,
			}
		);
		res.json({ message: '게시글이 수정 되었습니다.' });
	} catch (err) {
		console.log(err);
		res.json({ success: false });
	}
});

router.post('/write', (req, res) => {
	try {
		let obj;

		obj = {
			writer: req.body._id,
			title: req.body.title,
			description: req.body.description,
		};

		const board = new Board(obj);
		board.save();
		res.json({ message: '게시글이 업로드 되었습니다.' });
	} catch (err) {
		console.log(err);
		res.json({ success: false });
	}
});

router.post('/getBoardList', (req, res) => {
	try {
		const _id = req.body._id;
		const board = Board.find({ writer: _id }, null, {
			sort: { createdAt: -1 },
		});
		res.json({ list: board });
	} catch (err) {
		console.log(err);
		res.json({ success: false });
	}
});

router.post('/detail', (req, res) => {
	try {
		const _id = req.body._id;
		const board = Board.find({ _id });
		res.json({ board });
	} catch (err) {
		console.log(err);
		res.json({ success: false });
	}
});

module.exports = router;