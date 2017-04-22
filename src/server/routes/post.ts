import * as express from "express";
import * as PostController from '../controllers/post';

var router: express.Router = express.Router();

router.get('/post', PostController.posts);

router.post('/post', PostController.newpost);

export default router;
