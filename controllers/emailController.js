// controllers/emailController.js

import Email from '../model/Email.js'; // Ensure you have an Email model defined
import connectDB from '../database/conn.js';

export async function checkAndAddEmail(req, res) {
  await connectDB();

  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Missing field" });
    }

    const checkEmail = await Email.findOne({ email: email });

    if (checkEmail) {
      return res.status(500).json({ message: "Email already exists" });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return res.status(200).json({ message: "Email added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
