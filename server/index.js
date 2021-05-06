const express = require('express');
const app = express();
const port = 5000;
const config = require('./config/key');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
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

app.use('/', require('./routes/home'));
app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});