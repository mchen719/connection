const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const checkToken = require('./config/checkToken');

// const cors = require('cors')
// app.use(cors())
app.use(express.json()) // req.body
app.use((req, res, next) => {
	res.locals.data = {};
	next();
});

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'companyLogo.jpg')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkToken);
app.use('/api/users', require('./routes/api/userRouter'));
// app.use('/api/notifications', require('./routes/api/notificationRouter'))
// app.use('/api/messages', require('./routes/api/messageRouter'))
app.use('/api/experience', require('./routes/api/experienceRouter'));
app.use('/api/education', require('./routes/api/educationRouter'));
app.use('/api/posts', require('./routes/api/postRouter'));
app.use('/api/skill', require('./routes/api/skillRouter'));
app.use('/api/jobs', require('./routes/api/jobRouter'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// const http = require('http').Server(app)
// require('./chatServer.js').init(http)

// const port = process.env.PORT || 3010

// http.listen(port, function() {
// 	console.log(`Listening on chat server port ${port}`)
// })

// const http = require('http').Server(app)
// require('./chatServer.js').init(http)

// const port = process.env.PORT || 3010

// http.listen(port, function() {
// 	console.log(`Listening on chat server port ${port}`)
// })

module.exports = app

