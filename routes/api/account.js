import express from 'express';
const router = express.Router();

import { Client } from '../../models/Client';
import { UserSession } from '../../models/UserSession';

// @route   POST api/account/login
// @desc    Login User
// @access  Public
router.post('/login', (req, res) => {
  let { email } = req.body;
  const { name } = req.body;

  if (!email) {
    return res.send({ success: false,  message: 'Error: Email cannot be blank.'});
  } else if (!name) {
    return res.send({ success: false, message: 'Error: Name cannot be blank.' });
  }

  email = email.toLowerCase();
  email = email.trim();

  Client.findOne({ email: email })
    .then((user) => {
      if (user === null) {
        return res.send({ success: false, message: 'Error: User Invalid' });
      } else if (!user.validName(name, user.name)) {
        return res.send({ success: false, message: 'Error: Name Invalid' });
      }
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.permit = user.role;
      userSession.save()
        .then((session) => {
          return res.send({
            success: true,
            message: 'Sign in successfully',
            token: session._id
          });
        })
        .catch((err) => {
          console.log(err);
          return res.send({ success: false, message: 'Error: Server error' });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/account/logout
// @desc    Logout User
// @access  Private require auth
router.get('/logout', (req, res) => {
  const { token } = req.headers;

  if (!token) {
    return res.send({ success: false, message: 'Error: User is not login' });
  }

  UserSession.findOneAndUpdate({ _id: token, isDeleted: false }, { $set: { isDeleted:true } }, null)
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User is not login' });
      } else {
        return res.send({ success: true, message: 'Log out successfully' });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/account/verify
// @desc    Verify User
// @access  Private require auth
router.get('/verify', (req, res) => {
  const { token } = req.headers;

  if (!token) {
    return res.send({ success: false, message: 'Error: User is not login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User is not login' });
      } else {
        return res.send({ success: true, message: 'User verify', token: session._id });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

export default router;