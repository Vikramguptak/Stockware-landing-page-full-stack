const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendWhatsAppOTP = async (phoneNumber, otp) => {
  try {
    await client.messages.create({
      body: `Your Stockware OTP is: ${otp}`,
      from: 'whatsapp:+14155238886',  // Your Twilio WhatsApp number
      to: `whatsapp:${phoneNumber}`
    });
  } catch (error) {
    console.error('Error sending WhatsApp OTP:', error);
    throw error;
  }
};

module.exports = { sendWhatsAppOTP };