import express from 'express';
const router = express.Router();

import { Client } from '../../models/Client';
import { UserSession } from '../../models/UserSession';

// @route   GET api/clients
// @desc    Get All Clients
// @access  Private require user master
router.get('/', (req, res) => {
  Client.find()
    .then(clients => res.json({ success: true, clients }))
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/clients/id/:id
// @desc    Get A Client By Id
// @access  Private require auth
router.get('/id/:id', (req, res) => {
  const { token } = req.headers;
  const { id } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else {
        Client.findOne({id}, '-_id')
          .then(client => {
            if(client === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid Id' });
            } else {
              res.status(200).json({ success: true, client });
            }
          })
          .catch((err) => {
            console.log(err);
            return res.send({ success: false, message: 'Error: Server error' });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/clients/name/:name
// @desc    Get A Client By Name
// @access  Private require auth
router.get('/name/:name', (req, res) => {
  const { token } = req.headers;
  const { name } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else {
        Client.findOne({name}, '-_id')
          .then(client => {
            if(client === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid Name' });
            } else {
              res.status(200).json({ success: true, client });
            }
          })
          .catch((err) => {
            console.log(err);
            return res.send({ success: false, message: 'Error: Server error' });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/clients/email/:email
// @desc    Get A Client By Email
// @access  Private require auth
router.get('/email/:email', (req, res) => {
  const { token } = req.headers;
  const { email } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else {
        Client.findOne({email}, '-_id')
          .then(client => {
            if(client === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid Email' });
            } else {
              res.status(200).json({ success: true, client });
            }
          })
          .catch((err) => {
            console.log(err);
            return res.send({ success: false, message: 'Error: Server error' });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

export default router;