const express = require('express');
const app = express();
const port = 5000;
const config = require('./config/key');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/User');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('mongoDB connected...'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
	res.send('test success');
});

app.post('/api/users/register', (req, res) => {
	const user = new User(req.body);
	user.save((err, uerInfo) => {
		if (err) return res.json({ success: false, err });
		return res.status(200).json({ success: true });
	});
});

app.post('/api/users/login', (req, res) => {
	User.findOne({ email: req.body.email }, (err, user) => {
		if (!user) {
			return res.json({
				loginSuccess: false,
				message: '제공된 이메일에 해당하는 유저가 없습니다',
			});
		}
		user.comparePassword(req.body.password, (err, isMatch) => {
			if (!isMatch) return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
			user.generateToken((err, user) => {
				if (err) return res.status(400).send(err);
				res.cookie('x_auth', user.token).status(200).json({ loginSuccess: true, userId: user._id });
			});
		});
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});