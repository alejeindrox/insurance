import express from 'express';
const router = express.Router();

import { Policy } from '../../models/Policy';
import { Client } from '../../models/Client';
import { UserSession } from '../../models/UserSession';

// @route   GET api/policies
// @desc    Get All Policies
// @access  Private require user master
router.get('/', (req, res) => {
  Policy.find()
    .then(policies => res.json({ success: true, policies }));
});

// @route   GET api/policies/userbyid/:id/all
// @desc    Get Policies Of User By Id
// @access  Private require auth with admin
router.get('/userbyid/:id/all', (req, res) => {
  const { token } = req.headers;
  const { id } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else if (session.permit === 'admin') {
        Client.findOne({id})
          .then(client => {
            if(client === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid User Id' })
            } else {
              Policy.find({clientId: client.id}, '-_id')
                .then(policies => res.json({ success: true, policies }))
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
      } else {
        return res.send({ success: false, message: 'Error: User is not admin' });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/policies/userbyname/:name/all
// @desc    Get Policies Of User By Name
// @access  Private require auth with admin
router.get('/userbyname/:name/all', (req, res) => {
  const { token } = req.headers;
  const { name } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else if (session.permit === 'admin') {
        Client.findOne({name})
          .then(client => {
            if(client === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid User Name' })
            } else {
              Policy.find({clientId: client.id}, '-_id')
                .then(policies => res.json({ success: true, policies }))
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
      } else {
        return res.send({ success: false, message: 'Error: User is not admin' });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/policies/userbyemail/:email/all
// @desc    Get Policies Of User By Email
// @access  Private require auth with admin
router.get('/userbyemail/:email/all', (req, res) => {
  const { token } = req.headers;
  const { email } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else if (session.permit === 'admin') {
        Client.findOne({email})
          .then(client => {
            if(client === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid User Email' })
            } else {
              Policy.find({clientId: client.id}, '-_id')
                .then(policies => res.json({ success: true, policies }))
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
      } else {
        return res.send({ success: false, message: 'Error: User is not admin' });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

// @route   GET api/policies/:id/user
// @desc    Get Policy And User By Id
// @access  Private require auth with admin
router.get('/:id/user', (req, res) => {
  const { token } = req.headers;
  const { id } = req.params;

  if (!token) {
    return res.send({ success: false, message: 'Error: User must Login' });
  }

  UserSession.findOne({ _id: token, isDeleted: false })
    .then((session) => {
      if (session === null) {
        return res.send({ success: false, message: 'Error: User must Login' });
      } else if (session.permit === 'admin') {
        Policy.findOne({id}, '-_id')
          .then(policy => {
            if (policy === null) {
              res.status(404).json({ success: false, message: 'Error: Invalid Policy' })
            } else {
              Client.findOne({id: policy.clientId}, '-_id')
                .then(client => res.json({ success: true, policy, client }))
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
      } else {
        return res.send({ success: false, message: 'Error: User is not admin' });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({ success: false, message: 'Error: Server error' });
    });
});

export default router;