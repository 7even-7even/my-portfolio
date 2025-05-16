const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error:', err));

// Setup nodemailer for email sending
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email here
    pass: process.env.EMAIL_PASS  // Your Gmail App Password here
  }
});

// Contact route handler
app.use('/contact', require('./routes/contact'));

// Contact route (post request to save data to MongoDB and send email)
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Save data to MongoDB (ensure you've created your Contact model)
  try {
    const contactData = new Contact({
      name,
      email,
      message
    });

    await contactData.save(); // Save to MongoDB
    console.log("Data saved to MongoDB");

    // Sending email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send email to yourself (or you can use any recipient email)
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message from your contact form:

      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Email Error:", error); // Log email error to console
        return res.status(500).json({ success: false, message: "Message saved but email not sent.", error: error.message });
      }
      console.log("✅ Email sent: " + info.response); // Log successful email send
      return res.status(200).json({ success: true, message: "Message sent & saved successfully!" });
    });

  } catch (error) {
    console.error("❌ Error while saving contact data:", error);
    return res.status(500).json({ success: false, message: "An error occurred while processing your request.", error: error.message });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
