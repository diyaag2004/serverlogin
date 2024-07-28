// models/Email.js

import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: [true, "Email already exists"]
  }
});

export default mongoose.model('Email', EmailSchema);
