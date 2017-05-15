const Post = require('./postMd')
const PostTag = require('./postTagMd')
const Tag = require('./tagMd')

// Post.forge().fetchAll({withRelated: ['tags']})
//   .then(models => console.log(models.toJSON()))
//   .catch(err => console.log(err))

Tag.forge().orderBy('posts.length').fetchAll({withRelated: ['posts']})
  .then(models => {
    const unorderedArray = models.toJSON()
    // console.log(unorderedArray.posts.length);


  })
  .catch(err => console.log(err))
