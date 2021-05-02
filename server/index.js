const express = require('express');
const app = express();
const port = 5000;
const config = require('./config/key');
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
})

app.post('/api/users/register', (req, res) => {
	const user = new User(req.body);
	user.save((err, uerInfo) => {
		if (err) return res.json({ success: false, err });
		return res.status(200).json({ success: true });
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});