import * as jwt from 'jsonwebtoken';

import config from '../config';
import User from '../models/user';

export default (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  console.log('authorizationHeader', authorizationHeader);
  console.log('token', token);

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {
        User.findOne({ _id: decoded.id }).exec((err, user) => {
          if (err) {
            console.log('authenticate err', err);
            res.status(404).json({ error: 'No such user' });
          }
          Object.assign(req, { currentUser: user });
          next();
        });
      }
    });
  } else {
    next();
  }
};

export function isAdmin(req, res, next) {
  if (!req['currentUser']) {
    res.status(401).json({ error: 'Log in required.' });
  } else if (req['currentUser'].isAdmin) {
    next();
  } else {
    res.status(401).json({ error: 'Admin authorization required.' });
  }
}

export function isLoggedIn(req, res, next) {
  if (req['currentUser']) {
    next();
  } else {
    res.status(401).json({ error: 'Log in required.' });
  }
}
