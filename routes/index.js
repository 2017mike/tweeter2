const express = require("express");
const app = express.Router();
const getTweet = require("../util")


app.get('/tweet', async(req, res) => {
  const tweet = await getTweet()
  res.json(tweet)
})



module.exports = app