require('dotenv').config()


(function (){
  
  var variables = {}
  
  const sendSMS = async (toPhoneNumber, fromPhoneNumber, body) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require('twilio')(accountSid, authToken)
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    
    variables['body'] = body
    variables['toPhoneNumber'] = toPhoneNumber
    variables['fromPhoneNumber'] = fromPhoneNumber

    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }


    try {
      let response = await fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data
      })
    } catch (error) {
      console.log('Error:', error)
    }

  }

  return {
    sendSMS 
  }


})