const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require('../models/User');
const { sendWhatsAppOTP } = require('../services/whatsappService');
const authMiddleware = require('../middleware/authMiddleware');

// Existing login routes...

// Enable 2FA
router.post('/enable-2fa', authMiddleware, async (req, res) => {
  try {
    const secret = speakeasy.generateSecret({ name: 'Stockware' });
    const user = await User.findById(req.user.id);
    user.twoFactorSecret = secret.base32;
    await user.save();

    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);
    res.json({ secret: secret.base32, qrCodeUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error enabling 2FA' });
  }
});

// Verify 2FA
router.post('/verify-2fa', authMiddleware, async (req, res) => {
  try {
    const { token } = req.body;
    const user = await User.findById(req.user.id);
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token
    });

    if (verified) {
      user.twoFactorEnabled = true;
      await user.save();
      res.json({ message: '2FA enabled successfully' });
    } else {
      res.status(400).json({ message: 'Invalid token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error verifying 2FA' });
  }
});

// Request password reset
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const transporter = nodemailer.createTransport({
      // Configure your email service here
    });

    const mailOptions = {
      to: user.email,
      from: 'noreply@stockware.com',
      subject: 'Stockware Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset-password/${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error requesting password reset' });
  }
});

// Reset password
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password' });
  }
});

// Update user profile
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { profile } = req.body;
    const user = await User.findById(req.user.id);
    user.profile = { ...user.profile, ...profile };
    await user.save();
    res.json({ message: 'Profile updated successfully', profile: user.profile });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

module.exports = router;