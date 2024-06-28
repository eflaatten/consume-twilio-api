require('dotenv').config()
  
var variables = {}

const sendSMS = async (accountSid, authToken, toPhoneNumber, fromPhoneNumber, body) => {
    // const accountSid = process.env.TWILIO_ACCOUNT_SID
    // const authToken = process.env.TWILIO_AUTH_TOKEN

    const accountSid = variables['accountSid']
    const authToken = variables['authToken']
    const toPhoneNumber = variables['toPhoneNumber']
    const fromPhoneNumber = variables['fromPhoneNumber']
    const body = variables['body']

    const client = require('twilio')(accountSid, authToken)

    try {
        const message = await client.messages.create({
            body: body,
            from: fromPhoneNumber,
            to: toPhoneNumber
        })
        return message
    } catch (error){
        console.log('error: ', error)
        return { errors: error }
    }
}

sendSMS()

