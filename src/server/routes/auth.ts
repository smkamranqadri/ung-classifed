import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

let router: express.Router = express.Router();

// const admin = new User({
//   email: 'admin@rei.com',
//   password: '123',
//   isAdmin: true,
//   dateAdded: new Date(),
// });

// admin.save();

router.post('/auth', (req, res) => {
  const { email, password } = req.body;
  console.log('email', email);
  console.log('password', password);
  User.findOne({ email: email }).exec((err, user) => {
    if (err) {
      console.log('login err', err);
      return res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
    console.log('err', err);
    console.log('user', user);
    if (!user) {
      console.log('no user', user);
      return res.status(404).json({ error: 'No such user' });
    }
    if (user.validatePassword(password)) {
      const currentUser = {
        id: user._id,
        username: user.email,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign(currentUser, config.jwtSecret);
      req['currentUser'] = currentUser;
      currentUser['token'] = token;
      res.json(currentUser);
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

export default router;
