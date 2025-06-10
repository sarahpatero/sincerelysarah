const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow frontend files like HTML/CSS
app.use(express.static('public'));

// Route for contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Set up transporter (you can use Gmail for testing)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sarahrosepatero@gmail.com',
      pass: 'trjj bnvp mhfu uwuc'
    }
  });

  const mailOptions = {
    from: email,
    to: 'sarahrosepatero@gmail.com',
    subject: 'New Contact Form Message',
    text: `From: ${name} \nEmail: ${email} \n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email failed to send.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
