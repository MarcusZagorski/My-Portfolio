import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

const __dirname = import.meta.dirname;

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit", (req, res) => {
  const { firstName, surname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "matszagorski@gmail.com",
      pass: process.env.GOOGLE_NODEMAILER,
    },
  });

  const mailOptions = {
    from: `${firstName} ${surname} <${email}>`,
    to: "matszagorski@gmail.com",
    subject: `Message from Portfolio`,
    text: `Hi Marcus, 

${message}

Thanks, 

${firstName} ${surname}
  
Email Address: ${email}`,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (!error) {
      res.status(200).send("Message sent successfully!");
    } else {
      res.status(404).send(error);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Your server is listening on port ${PORT}`);
});
