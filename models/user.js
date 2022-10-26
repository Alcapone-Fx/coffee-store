const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'e-mail is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  avatar: String,
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['ADMIN', 'USER']
  },
  status: {
    type: Boolean,
    default: true
  },
  googleSigned: {
    type: Boolean,
    default: false
  }
});

module.exports = model('User', UserSchema);
