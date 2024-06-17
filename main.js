require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)

const sendMessage = () => {
  client.messages
    .create({
      body: "Test message from Twilio!",
      from: "+18445141385",
      to: "+18777804236"
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.log(error))
}
