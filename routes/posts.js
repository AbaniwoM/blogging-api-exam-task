const router = require("express").Router();
const verify = require("../routes/verifyToken");
const Post = require("../model/Post");

//Create Post
router.post("/", verify, async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          }, 
          { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Post by id
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Posts
router.get("/", async (req, res) => {
  try {
    const {page =1, limit =20} = req.query;
    const post = await Post.find().limit(limit *1).skip((page-1)*limit);
    res.status(200).json({ total: post.length, post});
    // update blog post read count
    // post.read_count += 1
    // await post.save();

    // return res.json({
    // status: true,
    // data: post
    // })
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Posts by username, category, author, title, tags
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.cat;
  const author = req.query.author;
  const title = req.query.title;
  const tags = req.query.tags;
  try {
    let posts;
    if(username) {
      posts = await Post.find({ username });
    } else if(category) {
      posts = await Post.find({ category});
    } else if(author) {
      posts = await Post.find({ author });
    } else if(title) {
      posts = await Post.find({ title });
    } else if(tags) {
      posts = await Post.find({ tags });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;