const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const user = mongoose.model('user', userSchema);
module.exports = user;
