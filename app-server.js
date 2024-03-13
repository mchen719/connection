const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')


app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img','logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/users', require('./routes/api/userRouter'))
app.use('/api/notifications', require('./routes/api/notificationRouter'))
app.use('/api/messages', require('./routes/api/messageRouter'))
app.use('/api/experience', require('./routes/api/experienceRouter'))
app.use('/api/education', require('./routes/api/educationRouter'))
app.use('/api/post', require('./routes/api/postRouter'));
app.use('/api/skill', require('./routes/api/skillRouter'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
