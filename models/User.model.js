/*
    File Name: User.model.js
    Student Name: Kristi Goxhaj
    StudentID: 301147545
    Date: 27/10/2022
*/

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
