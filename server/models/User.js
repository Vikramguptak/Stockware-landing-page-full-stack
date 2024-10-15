const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: String,
  name: String,
  phoneNumber: { type: String, unique: true, sparse: true },
  role: { type: String, required: true, enum: ['customer', 'warehouse_owner', 'logistics_provider'] },
  googleId: String,
  twoFactorSecret: String,
  twoFactorEnabled: { type: Boolean, default: false },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  profile: {
    company: String,
    address: String,
    city: String,
    country: String,
    zipCode: String,
    taxId: String,
    warehouseCapacity: Number, // for warehouse owners
    fleetSize: Number, // for logistics providers
    preferredPaymentMethod: String
  }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);