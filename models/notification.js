const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  type: String,
  content: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;

// notifications can ALSO be done with sockets. notifications is mostly front-end only stuff. 'user now has notification in notification array. front end displays the notification.'

// you will have to make the notification, plug it into the user's notifications array, and then check to see if it is in the array.

//
