require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: "Test message from Twilio!",
    from: "+18445141385",
    to: "+18777804236"
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error))

const sendSMS = (username, password, phoneNumber, fromPhoneNumber, body) => {
  username = username || 'username';
  password = password || 'password';
  
  client.messages
    .create({
      body: body,
      // +18445141385
      from: fromPhoneNumber,
      // +18777804236
      to: phoneNumber,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.log(error));

}

