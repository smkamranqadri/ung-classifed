import Post from '../models/post';

export function newpost(req, res) {
    let newpost = req.body;
    Post.create(newpost, (err: Error) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Post Submitted Successfully!')
        }
    });
}

export function posts(req, res) {
    Post.find({})
        .exec((err: Error, posts) => {
            if (err) {
                res.status(500).send(err);
            } else if (posts.length > 0) {
                res.status(200).json(posts)
            } else {
                res.status(500).send('No Post Found!')
            }
        });
}
