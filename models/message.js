const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  sender: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [
    {
      message: String,
      meta:
        {
          user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
          },
          delivered: Boolean,
          read: Boolean
        }
    }
  ],
  participants: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      delivered: Boolean,
      read: Boolean,
    }
  ]
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat

// Original message schema below:
// const messageSchema = new Schema({
//   senderId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   receiverId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   content: {
//     type: String,
//     required: true
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Message = mongoose.model('Message', messageSchema);

// module.exports = Message;

// JOSH NOTES. it's possible to do it this way but this is technical. This model etc is not the correct pathway to correctly get messages created and made. When someone sends a message it would go into the user's array of messages. You need to create a 'conversation' model rather than a message model. This model might work functionally but there is a LOT more setup involved / required.
// if you want to save the chats, you DO want a model for them in database.
// message model AND conversation model. a user would have multiple conversations with specific individuals.
// conversation members linked together and message contents.
// websocket.io vs socket.io   websocket sucks don't use it, use socket.io
// https://stackoverflow.com/questions/26936645/mongoose-private-chat-message-model

// you can put the message model above directly into message schema
// I think it'd be easier to create schema but not model. Create schema for a chat. ONLY model made is for the Conversation/chat, not an individual message
// worry about EVERY INDIVIDUAL message / convo at a later time.


/*
example of how to find and serve the existing chat thread. below concept hunts for chat based on you the querent and your buddy's IDs, sorts by the last starting first, and shows the most recent 20:
 Chat.find(({ users: { req.user._id, Chat.user._id })
    .sort({ updatedAt: -1 })
    .limit(20)

    things we may need for socket io to work : cors socket.io
    must also create a client folder? socket.io-client is the necessary socket extension for client. TWO ports
*/
