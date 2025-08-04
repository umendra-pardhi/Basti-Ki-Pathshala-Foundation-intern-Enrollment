// Run this once to create admin
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash('Admin@123', 10);
  const admin = new Admin({ email: 'admin@umend.in', password: hashedPassword });
  await admin.save();
  console.log('Admin created');
  process.exit();
});
